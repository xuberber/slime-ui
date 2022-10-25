import { resolve } from "path";
import { defineConfig } from "vite";
import { readdirSync } from "fs";
// import react from "@vitejs/plugin-react";

const input: string = resolve(__dirname, "packages/theme/src");

// https://vitejs.dev/config/
export default defineConfig({
  //   plugins: [react()],
  build: {
    assetsDir: "theme",
    rollupOptions: {
      input: readdirSync(input).map((name): string => {
        return `${input}/${name}`;
      }),
      output: {
        entryFileNames: "theme/[name].js",
        chunkFileNames: "theme/[name].js",
        assetFileNames: "theme/[name].[ext]",
      },
    },
  },
});
