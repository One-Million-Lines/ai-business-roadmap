import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { version } from "./package.json";

export default defineConfig(({ mode }) => ({
    base: mode === "production" ? "/demo/ai-business-roadmap/" : "/",
  server: {
    host: "::",
    port: 5307,
  },
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(version),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
