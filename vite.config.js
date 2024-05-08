import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";

export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ["firefox >= 50", "ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        iframe: "./iframe.html"
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
