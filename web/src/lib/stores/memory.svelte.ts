import { apiGet, apiPost, apiPut, apiDelete } from "$lib/api/client";

export interface MemoryEntry {
  key: string;
  content: string;
  category: string;
  score: number;
  created_at: number;
}

function createMemoryStore() {
  let entries = $state<MemoryEntry[]>([]);
  let loading = $state(false);

  return {
    get entries() {
      return entries;
    },
    get loading() {
      return loading;
    },

    async search(query: string, limit = 20, offset = 0) {
      loading = true;
      try {
        const params = new URLSearchParams({
          q: query,
          limit: String(limit),
          offset: String(offset),
        });
        entries = await apiGet<MemoryEntry[]>(`/memory?${params}`);
      } finally {
        loading = false;
      }
    },

    async getByKey(key: string) {
      return apiGet<MemoryEntry>(`/memory/${encodeURIComponent(key)}`);
    },

    async create(key: string, content: string, category?: string) {
      await apiPost("/memory", { key, content, category });
      entries = [
        {
          key,
          content,
          category: category ?? "Core",
          score: 1,
          created_at: Date.now(),
        },
        ...entries,
      ];
    },

    async update(key: string, content: string, category?: string) {
      await apiPut(`/memory/${encodeURIComponent(key)}`, { content, category });
      entries = entries.map((e) =>
        e.key === key ? { ...e, content, category: category ?? e.category } : e,
      );
    },

    async remove(key: string) {
      await apiDelete(`/memory/${encodeURIComponent(key)}`);
      entries = entries.filter((e) => e.key !== key);
    },

    clear() {
      entries = [];
    },
  };
}

export const memoryStore = createMemoryStore();
