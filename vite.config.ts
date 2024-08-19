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
      entry: "src/index.ts",
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
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
      outDir: "dist/types", // Specify the output directory for .d.ts files
      insertTypesEntry: true, // Create a "types" entry point in package.json
      include: ["src/**/*.ts", "src/**/*.tsx", "src/index.d.ts"],
    }),
  ],
});
