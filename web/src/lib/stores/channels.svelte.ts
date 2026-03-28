import { apiGet, apiPost, apiDelete, apiPut } from "$lib/api/client";
import * as m from "$lib/paraglide/messages";

export interface ChannelDef {
  id: string;
  name: string;
  description: string;
  credentials: { key: string; label: string; placeholder: string }[];
}

export interface ChannelWithStatus extends ChannelDef {
  configuredKeys: Set<string>;
  connected: boolean;
  status: string;
}

export interface ChannelConfig {
  telegram_dm_policy: string;
  telegram_polling_timeout_secs: number;
  telegram_require_group_mention: boolean;
  slack_allowed_channel_ids: string[];
  discord_allowed_guild_ids: number[];
  discord_allowed_channel_ids: number[];
}

function getBuiltinChannels(): ChannelDef[] {
  return [
    {
      id: "telegram",
      name: m.channel_telegram_name(),
      description: m.channel_telegram_description(),
      credentials: [
        {
          key: "token",
          label: m.channel_telegram_token_label(),
          placeholder: m.channel_telegram_token_placeholder(),
        },
        {
          key: "allowed_chat_ids",
          label: m.channel_telegram_chat_ids_label(),
          placeholder: m.channel_telegram_chat_ids_placeholder(),
        },
      ],
    },
    {
      id: "slack",
      name: m.channel_slack_name(),
      description: m.channel_slack_description(),
      credentials: [
        {
          key: "bot_token",
          label: m.channel_slack_bot_token_label(),
          placeholder: m.channel_slack_bot_token_placeholder(),
        },
        {
          key: "app_token",
          label: m.channel_slack_app_token_label(),
          placeholder: m.channel_slack_app_token_placeholder(),
        },
        {
          key: "allowed_channel_ids",
          label: m.channel_slack_channel_ids_label(),
          placeholder: m.channel_slack_channel_ids_placeholder(),
        },
      ],
    },
    {
      id: "discord",
      name: m.channel_discord_name(),
      description: m.channel_discord_description(),
      credentials: [
        {
          key: "token",
          label: m.channel_discord_token_label(),
          placeholder: m.channel_discord_token_placeholder(),
        },
        {
          key: "allowed_guild_ids",
          label: m.channel_discord_guild_ids_label(),
          placeholder: m.channel_discord_guild_ids_placeholder(),
        },
        {
          key: "allowed_channel_ids",
          label: m.channel_discord_channel_ids_label(),
          placeholder: m.channel_discord_channel_ids_placeholder(),
        },
      ],
    },
  ];
}

function credKey(channelId: string, field: string): string {
  return `channel:${channelId}:${field}`;
}

function createChannelsStore() {
  let channels = $state<ChannelWithStatus[]>([]);
  let loading = $state(false);
  let error = $state<string | null>(null);
  let channelConfig = $state<ChannelConfig>({
    telegram_dm_policy: "allowlist",
    telegram_polling_timeout_secs: 30,
    telegram_require_group_mention: true,
    slack_allowed_channel_ids: [],
    discord_allowed_guild_ids: [],
    discord_allowed_channel_ids: [],
  });

  return {
    get channels() {
      return channels;
    },
    get loading() {
      return loading;
    },
    get channelConfig() {
      return channelConfig;
    },
    get error() {
      return error;
    },

    async load() {
      loading = true;
      error = null;
      try {
        // Fetch configured credential keys
        let allKeys = new Set<string>();
        try {
          const keys = await apiGet<string[]>("/credentials");
          allKeys = new Set(keys.filter((k) => k.startsWith("channel:")));
        } catch (e: unknown) {
          error = e instanceof Error ? e.message : "Failed to load credentials";
          allKeys = new Set();
        }

        // Fetch channel statuses from backend (if channels feature active)
        let liveStatuses: Record<string, string> = {};
        try {
          const statusList =
            await apiGet<{ name: string; status: string }[]>("/channels");
          for (const s of statusList) {
            liveStatuses[s.name] = s.status;
          }
        } catch {
          // Channels feature may not be enabled — not an error
        }

        // Fetch config for channel settings
        try {
          const config = await apiGet<Record<string, unknown>>("/config");
          channelConfig = {
            telegram_dm_policy:
              (config.telegram_dm_policy as string) ?? "allowlist",
            telegram_polling_timeout_secs:
              (config.telegram_polling_timeout_secs as number) ?? 30,
            telegram_require_group_mention:
              (config.telegram_require_group_mention as boolean) ?? true,
            slack_allowed_channel_ids:
              (config.slack_allowed_channel_ids as string[]) ?? [],
            discord_allowed_guild_ids:
              (config.discord_allowed_guild_ids as number[]) ?? [],
            discord_allowed_channel_ids:
              (config.discord_allowed_channel_ids as number[]) ?? [],
          };
        } catch (e: unknown) {
          if (!error) {
            error =
              e instanceof Error ? e.message : "Failed to load channel config";
          }
        }

        // Build channel list with per-channel credential status
        channels = getBuiltinChannels().map((def) => {
          const configuredKeys = new Set<string>();
          for (const cred of def.credentials) {
            const k = credKey(def.id, cred.key);
            if (allKeys.has(k)) configuredKeys.add(cred.key);
          }
          const liveStatus = liveStatuses[def.id];
          const hasRequiredToken = configuredKeys.size > 0;
          const isConnected = liveStatus?.toLowerCase() === "connected";
          return {
            ...def,
            configuredKeys,
            connected: isConnected,
            status: liveStatus
              ? liveStatus
              : hasRequiredToken
                ? "Not connected"
                : "Not configured",
          };
        });
      } finally {
        loading = false;
      }
    },

    async setCredential(channelId: string, field: string, value: string) {
      await apiPost("/credentials", {
        key: credKey(channelId, field),
        value,
      });
      await this.load();
    },

    async removeCredential(channelId: string, field: string) {
      await apiDelete(
        `/credentials/${encodeURIComponent(credKey(channelId, field))}`,
      );
      await this.load();
    },

    async testConnection(
      channelId: string,
    ): Promise<{ healthy: boolean; error?: string; latency_ms?: number }> {
      try {
        const result = await apiPost<{
          channel: string;
          healthy: boolean;
          error?: string;
          latency_ms?: number;
        }>(`/channels/${channelId}/test`, {});
        return {
          healthy: result.healthy,
          error: result.error,
          latency_ms: result.latency_ms,
        };
      } catch (e) {
        return {
          healthy: false,
          error: e instanceof Error ? e.message : "Connection failed",
        };
      }
    },

    async credentialExists(channelId: string, field: string): Promise<boolean> {
      try {
        const result = await apiGet<{ exists: boolean }>(
          `/credentials/${encodeURIComponent(credKey(channelId, field))}/exists`,
        );
        return result.exists;
      } catch {
        return false;
      }
    },

    async connectChannel(channelId: string): Promise<boolean> {
      try {
        await apiPost(`/channels/${channelId}/connect`, {});
        await this.load();
        return true;
      } catch {
        return false;
      }
    },

    async disconnectChannel(channelId: string): Promise<boolean> {
      try {
        await apiPost(`/channels/${channelId}/disconnect`, {});
        await this.load();
        return true;
      } catch {
        return false;
      }
    },

    async updateConfig(fields: Partial<ChannelConfig>) {
      // Snapshot before optimistic update
      const snapshot = { ...channelConfig };
      // Optimistic update
      Object.assign(channelConfig, fields);
      try {
        await apiPut("/config", fields);
      } catch (e: unknown) {
        // Restore from snapshot on failure
        channelConfig = snapshot;
        error =
          e instanceof Error ? e.message : "Failed to update channel config";
        throw e;
      }
    },
  };
}

export const channelsStore = createChannelsStore();
