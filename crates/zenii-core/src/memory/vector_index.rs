use crate::db::DbPool;
use crate::{Result, ZeniiError};

pub struct VectorIndex {
    pool: DbPool,
    #[allow(dead_code)]
    dim: usize,
}

impl VectorIndex {
    /// Create a new vector index, initializing the vec0 virtual table.
    ///
    /// # Safety Contract
    /// This function calls `pool.blocking_lock()` internally. It **must** be called
    /// from within a `tokio::task::spawn_blocking` context to avoid blocking the
    /// async runtime. Direct calls from async functions will deadlock.
    pub fn new(pool: DbPool, dim: usize) -> Result<Self> {
        // Initialize vec0 virtual table
        {
            let conn = pool.blocking_lock();
            conn.execute_batch(&format!(
                "CREATE VIRTUAL TABLE IF NOT EXISTS vec_embeddings USING vec0(
                    embedding float[{dim}]
                );
                CREATE TABLE IF NOT EXISTS vec_id_map (
                    vec_rowid INTEGER PRIMARY KEY,
                    memory_key TEXT NOT NULL UNIQUE
                );"
            ))
            .map_err(|e| ZeniiError::Memory(format!("vector index init failed: {e}")))?;
        }
        Ok(Self { pool, dim })
    }

    pub async fn store(&self, key: &str, embedding: &[f32]) -> Result<()> {
        let pool = self.pool.clone();
        let key = key.to_string();
        let embedding = embedding.to_vec();

        crate::db::with_db(&pool, move |conn| {
            // Delete existing if any
            let existing_rowid: Option<i64> = conn
                .query_row(
                    "SELECT vec_rowid FROM vec_id_map WHERE memory_key = ?1",
                    rusqlite::params![key],
                    |row| row.get(0),
                )
                .ok();

            if let Some(rowid) = existing_rowid {
                conn.execute(
                    "DELETE FROM vec_embeddings WHERE rowid = ?1",
                    rusqlite::params![rowid],
                )
                .map_err(ZeniiError::from)?;
                conn.execute(
                    "DELETE FROM vec_id_map WHERE vec_rowid = ?1",
                    rusqlite::params![rowid],
                )
                .map_err(ZeniiError::from)?;
            }

            // Insert new embedding
            let blob: Vec<u8> = embedding.iter().flat_map(|f| f.to_le_bytes()).collect();
            conn.execute(
                "INSERT INTO vec_embeddings(embedding) VALUES (?1)",
                rusqlite::params![blob],
            )
            .map_err(ZeniiError::from)?;

            let rowid = conn.last_insert_rowid();
            conn.execute(
                "INSERT INTO vec_id_map (vec_rowid, memory_key) VALUES (?1, ?2)",
                rusqlite::params![rowid, key],
            )
            .map_err(ZeniiError::from)?;

            Ok(())
        })
        .await
    }

    pub async fn search(
        &self,
        query_embedding: &[f32],
        limit: usize,
    ) -> Result<Vec<(String, f32)>> {
        if limit == 0 {
            return Ok(vec![]);
        }
        let pool = self.pool.clone();
        let embedding = query_embedding.to_vec();

        crate::db::with_db(&pool, move |conn| {
            let blob: Vec<u8> = embedding.iter().flat_map(|f| f.to_le_bytes()).collect();
            let mut stmt = conn
                .prepare(
                    "SELECT v.rowid, v.distance, m.memory_key
                 FROM vec_embeddings v
                 JOIN vec_id_map m ON m.vec_rowid = v.rowid
                 WHERE v.embedding MATCH ?1
                 AND k = ?2
                 ORDER BY v.distance",
                )
                .map_err(ZeniiError::from)?;

            let results = stmt
                .query_map(rusqlite::params![blob, limit as i64], |row| {
                    let key: String = row.get(2)?;
                    let distance: f32 = row.get(1)?;
                    // Convert distance to similarity (1 - distance for cosine)
                    Ok((key, 1.0 - distance))
                })
                .map_err(ZeniiError::from)?
                .filter_map(|r| r.ok())
                .collect();

            Ok(results)
        })
        .await
    }

    pub async fn delete(&self, key: &str) -> Result<bool> {
        let pool = self.pool.clone();
        let key = key.to_string();

        crate::db::with_db(&pool, move |conn| {
            let existing_rowid: Option<i64> = conn
                .query_row(
                    "SELECT vec_rowid FROM vec_id_map WHERE memory_key = ?1",
                    rusqlite::params![key],
                    |row| row.get(0),
                )
                .ok();

            if let Some(rowid) = existing_rowid {
                conn.execute(
                    "DELETE FROM vec_embeddings WHERE rowid = ?1",
                    rusqlite::params![rowid],
                )
                .map_err(ZeniiError::from)?;
                conn.execute(
                    "DELETE FROM vec_id_map WHERE vec_rowid = ?1",
                    rusqlite::params![rowid],
                )
                .map_err(ZeniiError::from)?;
                Ok(true)
            } else {
                Ok(false)
            }
        })
        .await
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::db;
    use tempfile::TempDir;

    async fn setup(dim: usize) -> (TempDir, VectorIndex) {
        unsafe {
            rusqlite::ffi::sqlite3_auto_extension(Some(std::mem::transmute(
                sqlite_vec::sqlite3_vec_init as *const (),
            )));
        }
        let dir = TempDir::new().unwrap();
        let path = dir.path().join("vec.db");
        let pool = db::init_pool(&path).unwrap();
        let vi = tokio::task::spawn_blocking(move || VectorIndex::new(pool, dim).unwrap())
            .await
            .unwrap();
        (dir, vi)
    }

    #[tokio::test(flavor = "multi_thread", worker_threads = 2)]
    async fn store_and_search_round_trip() {
        let (_dir, vi) = setup(4).await;
        let embedding = vec![1.0, 0.0, 0.0, 0.0];
        vi.store("key1", &embedding).await.unwrap();

        let results = vi.search(&embedding, 10).await.unwrap();
        assert_eq!(results.len(), 1);
        assert_eq!(results[0].0, "key1");
    }

    #[tokio::test(flavor = "multi_thread", worker_threads = 2)]
    async fn delete_removes_entry() {
        let (_dir, vi) = setup(4).await;
        vi.store("key1", &[1.0, 0.0, 0.0, 0.0]).await.unwrap();
        assert!(vi.delete("key1").await.unwrap());
        let results = vi.search(&[1.0, 0.0, 0.0, 0.0], 10).await.unwrap();
        assert!(results.is_empty());
    }

    #[tokio::test(flavor = "multi_thread", worker_threads = 2)]
    async fn scores_in_valid_range() {
        let (_dir, vi) = setup(4).await;
        vi.store("key1", &[1.0, 0.0, 0.0, 0.0]).await.unwrap();
        vi.store("key2", &[0.0, 1.0, 0.0, 0.0]).await.unwrap();

        let results = vi.search(&[1.0, 0.0, 0.0, 0.0], 10).await.unwrap();
        for (_, score) in &results {
            assert!(
                *score >= -1.0 && *score <= 2.0,
                "score {score} out of range"
            );
        }
    }

    #[tokio::test(flavor = "multi_thread", worker_threads = 2)]
    async fn search_limit_zero_returns_empty() {
        let (_dir, vi) = setup(4).await;
        vi.store("key1", &[1.0, 0.0, 0.0, 0.0]).await.unwrap();
        let results = vi.search(&[1.0, 0.0, 0.0, 0.0], 0).await.unwrap();
        assert!(results.is_empty());
    }

    #[tokio::test(flavor = "multi_thread", worker_threads = 2)]
    async fn upsert_replaces_existing() {
        let (_dir, vi) = setup(4).await;
        vi.store("key1", &[1.0, 0.0, 0.0, 0.0]).await.unwrap();
        vi.store("key1", &[0.0, 1.0, 0.0, 0.0]).await.unwrap();

        let results = vi.search(&[0.0, 1.0, 0.0, 0.0], 10).await.unwrap();
        assert_eq!(results.len(), 1);
        assert_eq!(results[0].0, "key1");
    }
}
