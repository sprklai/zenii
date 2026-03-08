import { apiGet, apiPost, apiDelete } from "$lib/api/client";

export interface ModelInfo {
  id: string;
  provider_id: string;
  model_id: string;
  display_name: string;
  context_limit: number | null;
  is_custom: boolean;
  is_active: boolean;
}

export interface ProviderWithKeyStatus {
  id: string;
  name: string;
  base_url: string;
  requires_api_key: boolean;
  is_active: boolean;
  is_user_defined: boolean;
  models: ModelInfo[];
  has_api_key: boolean;
}

export interface ConfiguredModel {
  value: string; // "provider_id:model_id"
  label: string; // "Provider / Model"
}

export interface DefaultModel {
  provider_id: string;
  model_id: string;
}

const SELECTED_MODEL_KEY = "mesoclaw:selectedModel";

function createProvidersStore() {
  let providers = $state<ProviderWithKeyStatus[]>([]);
  let loading = $state(false);
  let selectedModel = $state(
    typeof localStorage !== "undefined"
      ? (localStorage.getItem(SELECTED_MODEL_KEY) ?? "")
      : "",
  );
  let defaultModel = $state<DefaultModel | null>(null);

  return {
    get providers() {
      return providers;
    },
    get loading() {
      return loading;
    },
    get selectedModel() {
      return selectedModel;
    },
    set selectedModel(value: string) {
      selectedModel = value;
      if (typeof localStorage !== "undefined") {
        if (value) {
          localStorage.setItem(SELECTED_MODEL_KEY, value);
        } else {
          localStorage.removeItem(SELECTED_MODEL_KEY);
        }
      }
    },
    get defaultModel() {
      return defaultModel;
    },
    get configuredModels(): ConfiguredModel[] {
      return providers
        .filter((p) => p.has_api_key && p.models.length > 0)
        .flatMap((p) =>
          p.models.map((m) => ({
            value: `${p.id}:${m.model_id}`,
            label: `${p.name} / ${m.display_name}`,
          })),
        );
    },

    async load() {
      loading = true;
      try {
        providers = await apiGet<ProviderWithKeyStatus[]>(
          "/providers/with-key-status",
        );
        const models = this.configuredModels;
        // Validate persisted model still exists, fall back to first available
        if (!selectedModel || !models.some((m) => m.value === selectedModel)) {
          this.selectedModel = models.length > 0 ? models[0].value : "";
        }
      } finally {
        loading = false;
      }
    },

    async loadDefault() {
      try {
        const result = await apiGet<DefaultModel | null>("/providers/default");
        defaultModel = result;
        if (result && !selectedModel) {
          selectedModel = `${result.provider_id}:${result.model_id}`;
        }
      } catch {
        defaultModel = null;
      }
    },

    async setDefault(providerId: string, modelId: string) {
      await apiPost("/providers/default", {
        provider_id: providerId,
        model_id: modelId,
      });
      defaultModel = { provider_id: providerId, model_id: modelId };
    },

    async setApiKey(providerId: string, value: string) {
      await apiPost("/credentials", {
        key: `api_key:${providerId}`,
        value,
      });
      await this.load();
    },

    async removeApiKey(providerId: string) {
      await apiDelete(`/credentials/api_key:${providerId}`);
      await this.load();
    },

    async addModel(providerId: string, modelId: string) {
      await apiPost(`/providers/${providerId}/models`, {
        model_id: modelId,
        display_name: modelId,
      });
      await this.load();
    },

    async deleteModel(providerId: string, modelId: string) {
      await apiDelete(`/providers/${providerId}/models/${modelId}`);
      await this.load();
    },

    async addProvider(
      id: string,
      name: string,
      baseUrl: string,
      requiresApiKey: boolean,
    ) {
      await apiPost("/providers", {
        id,
        name,
        base_url: baseUrl,
        requires_api_key: requiresApiKey,
        models: [],
      });
      await this.load();
    },

    async deleteProvider(id: string) {
      await apiDelete(`/providers/${id}`);
      await this.load();
    },

    async testConnection(
      providerId: string,
    ): Promise<{ success: boolean; message: string; latency_ms?: number }> {
      return apiPost(`/providers/${providerId}/test`, {});
    },
  };
}

export const providersStore = createProvidersStore();
