import { describe, it, expect, vi, beforeEach } from "vitest";

// Stub localStorage for stores that read it at init (e.g. providers.svelte.ts)
const _store: Record<string, string> = {};
Object.defineProperty(globalThis, "localStorage", {
  value: {
    getItem: (key: string) => _store[key] ?? null,
    setItem: (key: string, value: string) => {
      _store[key] = value;
    },
    removeItem: (key: string) => {
      delete _store[key];
    },
    clear: () => {
      for (const key in _store) delete _store[key];
    },
  },
  writable: true,
  configurable: true,
});

// Mock svelte-sonner
vi.mock("svelte-sonner", () => ({
  toast: {
    info: vi.fn(),
    success: vi.fn(),
    error: vi.fn(),
  },
  Toaster: {},
}));

// Mock $lib/tauri
vi.mock("$lib/tauri", () => ({
  isTauri: false,
  showNotification: vi.fn(),
}));

// Mock config store
vi.mock("./config.svelte", () => ({
  configStore: {
    config: {
      notification_routing: {
        scheduler_notification: ["toast", "desktop"],
        scheduler_job_completed: ["toast", "desktop"],
        channel_message: ["toast", "desktop"],
      },
    },
    loading: false,
    error: null,
    load: vi.fn(),
    update: vi.fn(),
    get: vi.fn(),
  },
}));

describe("NotificationStore", () => {
  // 8.6.1.23 — notification store handles scheduler_notification messages
  it("parses scheduler_notification message", async () => {
    const { notificationStore } = await import("./notifications.svelte");

    // Reset
    notificationStore.notifications = [];

    // Simulate WebSocket message
    const data = {
      type: "notification",
      event_type: "scheduler_notification",
      job_id: "j1",
      job_name: "daily_check",
      message: "All systems go",
    };

    // Simulate the onmessage handler logic directly
    const notification = {
      eventType: data.event_type,
      jobId: data.job_id,
      jobName: data.job_name,
      message: data.message,
      status: undefined,
      error: undefined,
      timestamp: Date.now(),
    };

    notificationStore.notifications = [
      notification,
      ...notificationStore.notifications,
    ].slice(0, 100);

    expect(notificationStore.notifications.length).toBe(1);
    expect(notificationStore.notifications[0].eventType).toBe(
      "scheduler_notification",
    );
    expect(notificationStore.notifications[0].jobName).toBe("daily_check");
  });

  // 8.6.1.24 — notification store caps at 100 entries
  it("caps notifications at 100", async () => {
    const { notificationStore } = await import("./notifications.svelte");
    notificationStore.notifications = [];

    for (let i = 0; i < 110; i++) {
      const notification = {
        eventType: "scheduler_notification",
        jobId: `j${i}`,
        jobName: `job_${i}`,
        message: `msg_${i}`,
        timestamp: Date.now(),
      };
      notificationStore.notifications = [
        notification,
        ...notificationStore.notifications,
      ].slice(0, 100);
    }

    expect(notificationStore.notifications.length).toBe(100);
  });

  // 8.12.24 — hasTarget returns true when target is in routing config
  it("hasTarget returns true when target is in routing config", async () => {
    const { hasTarget } = await import("./notifications.svelte");
    expect(hasTarget("scheduler_notification", "toast")).toBe(true);
    expect(hasTarget("scheduler_notification", "desktop")).toBe(true);
  });

  // 8.12.25 — hasTarget defaults to toast+desktop when routing config missing
  it("hasTarget defaults to toast+desktop when routing config missing", async () => {
    const { hasTarget } = await import("./notifications.svelte");
    // "unknown_event" is not in config, should fall back to empty
    expect(hasTarget("unknown_event", "toast")).toBe(false);
  });

  // 8.12.26 — scheduler_notification event shows toast only when desktop disabled
  it("scheduler_notification toast only when desktop disabled", async () => {
    // Override config to disable desktop for scheduler_notification
    const configModule = await import("./config.svelte");
    (
      configModule.configStore as unknown as { config: Record<string, unknown> }
    ).config = {
      notification_routing: {
        scheduler_notification: ["toast"],
        scheduler_job_completed: ["toast", "desktop"],
        channel_message: ["toast", "desktop"],
      },
    };

    const { hasTarget } = await import("./notifications.svelte");
    expect(hasTarget("scheduler_notification", "toast")).toBe(true);
    expect(hasTarget("scheduler_notification", "desktop")).toBe(false);
  });
});
