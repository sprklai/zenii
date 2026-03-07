import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  api,
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
  MesoApiError,
  healthCheck,
  getToken,
  setToken,
  clearToken,
  getBaseUrl,
  setBaseUrl,
} from "./client";

// Mock localStorage
const store: Record<string, string> = {};
const localStorageMock = {
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
};
Object.defineProperty(globalThis, "localStorage", {
  value: localStorageMock,
  writable: true,
});

describe("Token management", () => {
  beforeEach(() => localStorageMock.clear());

  it("getToken returns null when no token", () => {
    expect(getToken()).toBeNull();
  });

  it("setToken and getToken round-trip", () => {
    setToken("test-token-123");
    expect(getToken()).toBe("test-token-123");
  });

  it("clearToken removes token", () => {
    setToken("test-token-123");
    clearToken();
    expect(getToken()).toBeNull();
  });
});

describe("Base URL management", () => {
  beforeEach(() => localStorageMock.clear());

  it("getBaseUrl returns default when not set", () => {
    expect(getBaseUrl()).toBe("http://127.0.0.1:18981");
  });

  it("setBaseUrl and getBaseUrl round-trip", () => {
    setBaseUrl("http://example.com:9999");
    expect(getBaseUrl()).toBe("http://example.com:9999");
  });
});

describe("API client", () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // 6.1: API client sets auth header
  it("sets Authorization header when token exists", async () => {
    setToken("my-secret-token");

    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ data: "test" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    await apiGet("/test");

    const callArgs = mockFetch.mock.calls[0];
    expect(callArgs[1].headers["Authorization"]).toBe("Bearer my-secret-token");
  });

  it("does not set Authorization header when no token", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ data: "test" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    await apiGet("/test");

    const callArgs = mockFetch.mock.calls[0];
    expect(callArgs[1].headers["Authorization"]).toBeUndefined();
  });

  // 6.2: API client handles error responses
  it("throws MesoApiError with parsed error body", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      statusText: "Unauthorized",
      json: () =>
        Promise.resolve({
          error_code: "MESO_AUTH",
          message: "Invalid token",
        }),
    });
    vi.stubGlobal("fetch", mockFetch);

    await expect(apiGet("/protected")).rejects.toThrow(MesoApiError);

    try {
      await apiGet("/protected");
    } catch (e) {
      const err = e as MesoApiError;
      expect(err.status).toBe(401);
      expect(err.errorCode).toBe("MESO_AUTH");
      expect(err.details).toBe("Invalid token");
    }
  });

  it("handles non-JSON error responses", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      json: () => Promise.reject(new Error("not json")),
    });
    vi.stubGlobal("fetch", mockFetch);

    await expect(apiGet("/fail")).rejects.toThrow(MesoApiError);
  });

  it("handles 204 No Content responses", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 204,
      json: () => Promise.reject(new Error("no body")),
    });
    vi.stubGlobal("fetch", mockFetch);

    const result = await apiDelete("/resource/1");
    expect(result).toBeUndefined();
  });

  it("apiPost sends JSON body", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ id: "1" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    await apiPost("/sessions", { title: "Test" });

    const callArgs = mockFetch.mock.calls[0];
    expect(callArgs[1].method).toBe("POST");
    expect(callArgs[1].body).toBe(JSON.stringify({ title: "Test" }));
    expect(callArgs[1].headers["Content-Type"]).toBe("application/json");
  });

  it("apiPut sends PUT request with body", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ updated: true }),
    });
    vi.stubGlobal("fetch", mockFetch);

    await apiPut("/config", { key: "value" });

    const callArgs = mockFetch.mock.calls[0];
    expect(callArgs[1].method).toBe("PUT");
  });

  // 6.7 (partial): healthCheck returns true on success
  it("healthCheck returns true when server responds ok", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ status: "ok" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    expect(await healthCheck()).toBe(true);
  });

  it("healthCheck returns false on error", async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error("network error"));
    vi.stubGlobal("fetch", mockFetch);

    expect(await healthCheck()).toBe(false);
  });
});
