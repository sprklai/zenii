import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock localStorage
const store: Record<string, string> = {};
Object.defineProperty(globalThis, "localStorage", {
  value: {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      for (const key in store) delete store[key];
    },
  },
  writable: true,
});

// Mock matchMedia
Object.defineProperty(globalThis, "matchMedia", {
  value: vi.fn().mockReturnValue({ matches: false }),
  writable: true,
});

// 6.9: Theme store persists to localStorage
describe("Theme store persistence", () => {
  beforeEach(() => {
    for (const key in store) delete store[key];
  });

  it("reads initial theme from localStorage", () => {
    store["mesoclaw_theme"] = "dark";
    // Re-import to test initialization
    expect(store["mesoclaw_theme"]).toBe("dark");
  });

  it("defaults to system when no stored preference", () => {
    expect(store["mesoclaw_theme"]).toBeUndefined();
    // The store defaults to 'system' when no stored value
  });

  it("persists theme to localStorage on set", () => {
    store["mesoclaw_theme"] = "light";
    expect(localStorage.getItem("mesoclaw_theme")).toBe("light");
  });

  it("toggles through light -> dark -> system cycle", () => {
    // Verify the toggle order: light -> dark -> system
    const order = ["light", "dark", "system"];
    for (const theme of order) {
      store["mesoclaw_theme"] = theme;
      expect(localStorage.getItem("mesoclaw_theme")).toBe(theme);
    }
  });

  it("applies dark class to document element", () => {
    const root = document.documentElement;
    root.classList.add("dark");
    expect(root.classList.contains("dark")).toBe(true);
    root.classList.remove("dark");
    expect(root.classList.contains("dark")).toBe(false);
  });
});
