import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  base: "./",
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        hub: path.resolve(__dirname, "index.html"),
        amlb: path.resolve(__dirname, "AMLB/index.html"),
        amla: path.resolve(__dirname, "AMLA/index.html"),
        mp: path.resolve(__dirname, "MP/index.html"),
        drd: path.resolve(__dirname, "DRD/index.html"),
      },
    },
  },
});
