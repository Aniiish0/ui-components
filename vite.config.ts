import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import path from "path";
import dts from "vite-plugin-dts";

// Read and parse package.json
const packageJson = JSON.parse(
  readFileSync(path.resolve(__dirname, "package.json"), "utf-8"),
);

// Extract the repository name from the "name" field in package.json
const repoName = packageJson.name || null;

// Configure Vite
export default defineConfig({
  base: repoName === null ? "/" : `/${repoName}/`,
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui-components",
    },
    rollupOptions: {
      // externalize dependencies that shouldn't be bundled into the package
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
});
