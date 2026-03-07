import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  plugins: [svelte({ hot: false })],
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,js}"],
    alias: {
      $lib: path.resolve("./src/lib"),
      "$app/navigation": path.resolve("./src/test-mocks/navigation.ts"),
      "$app/environment": path.resolve("./src/test-mocks/environment.ts"),
    },
  },
});
