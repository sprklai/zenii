import { apiGet } from "$lib/api/client";

export interface Provider {
  name: string;
  type: string;
  model_id: string;
  base_url?: string;
}

export interface Model {
  id: string;
  provider: string;
}

function createProvidersStore() {
  let providers = $state<Provider[]>([]);
  let models = $state<Model[]>([]);
  let loading = $state(false);

  return {
    get providers() {
      return providers;
    },
    get models() {
      return models;
    },
    get loading() {
      return loading;
    },

    async load() {
      loading = true;
      try {
        const [p, m] = await Promise.all([
          apiGet<Provider[]>("/providers"),
          apiGet<Model[]>("/models"),
        ]);
        providers = p;
        models = m;
      } finally {
        loading = false;
      }
    },
  };
}

export const providersStore = createProvidersStore();
