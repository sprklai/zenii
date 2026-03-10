import { apiGet, apiPost, apiDelete, apiPut } from "$lib/api/client";

export interface PluginListItem {
  name: string;
  version: string;
  description: string;
  enabled: boolean;
  tools_count: number;
  skills_count: number;
}

export interface PluginDetail {
  manifest: {
    plugin: {
      name: string;
      version: string;
      description: string;
      author?: string;
      license?: string;
      homepage?: string;
    };
    tools: { name: string; description: string }[];
    skills: { name: string; file: string }[];
  };
  enabled: boolean;
  installed_at: string;
  source: Record<string, unknown>;
}

function createPluginsStore() {
  let plugins = $state<PluginListItem[]>([]);
  let loading = $state(false);
  let installing = $state(false);
  let error = $state<string | null>(null);

  return {
    get plugins() {
      return plugins;
    },
    get loading() {
      return loading;
    },
    get installing() {
      return installing;
    },
    get error() {
      return error;
    },

    async load() {
      loading = true;
      error = null;
      try {
        plugins = await apiGet<PluginListItem[]>("/plugins");
      } catch (e) {
        error = e instanceof Error ? e.message : "Failed to load plugins";
        plugins = [];
      } finally {
        loading = false;
      }
    },

    async install(source: string, local: boolean): Promise<boolean> {
      installing = true;
      error = null;
      try {
        await apiPost("/plugins/install", { source, local });
        await this.load();
        return true;
      } catch (e) {
        error = e instanceof Error ? e.message : "Install failed";
        return false;
      } finally {
        installing = false;
      }
    },

    async remove(name: string): Promise<boolean> {
      error = null;
      try {
        await apiDelete(`/plugins/${encodeURIComponent(name)}`);
        await this.load();
        return true;
      } catch (e) {
        error = e instanceof Error ? e.message : "Remove failed";
        return false;
      }
    },

    async toggle(name: string): Promise<boolean> {
      error = null;
      try {
        await apiPut(`/plugins/${encodeURIComponent(name)}/toggle`, {});
        await this.load();
        return true;
      } catch (e) {
        error = e instanceof Error ? e.message : "Toggle failed";
        return false;
      }
    },

    async update(name: string): Promise<boolean> {
      error = null;
      try {
        await apiPost(`/plugins/${encodeURIComponent(name)}/update`, {});
        await this.load();
        return true;
      } catch (e) {
        error = e instanceof Error ? e.message : "Update failed";
        return false;
      }
    },

    async getDetail(name: string): Promise<PluginDetail | null> {
      try {
        return await apiGet<PluginDetail>(
          `/plugins/${encodeURIComponent(name)}`,
        );
      } catch {
        return null;
      }
    },
  };
}

export const pluginsStore = createPluginsStore();
