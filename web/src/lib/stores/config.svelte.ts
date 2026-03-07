import { apiGet, apiPut } from "$lib/api/client";

function createConfigStore() {
  let config = $state<Record<string, unknown>>({});
  let loading = $state(false);

  return {
    get config() {
      return config;
    },
    get loading() {
      return loading;
    },

    async load() {
      loading = true;
      try {
        config = await apiGet<Record<string, unknown>>("/config");
      } finally {
        loading = false;
      }
    },

    async update(partial: Record<string, unknown>) {
      const result = await apiPut<{
        status: string;
        fields: Record<string, unknown>;
      }>("/config", partial);
      config = { ...config, ...partial };
      return result;
    },

    get(key: string): unknown {
      return config[key];
    },
  };
}

export const configStore = createConfigStore();
