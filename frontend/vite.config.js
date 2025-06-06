import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // equivalent to 0.0.0.0
    port: 3000,
  },
  proxy: {
    "/api": {
      target: "http://backend:8000",
      changeOrigin: true,
      secure: false, // TODO http set to true + configure https
    },
  },
  resolve: {
    alias: {
      "leaflet/dist/leaflet.css": new URL(
        "node_modules/leaflet/dist/leaflet.css",
        import.meta.url
      ).pathname,
    },
  },
});
