import { defineConfig } from "vite";
import * as path from "path";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as packageJson from "./package.json";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

const libConfig = defineConfig({
  plugins: [
    dts({
      outputDir: "dist",
    }),
    tsConfigPaths(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (chunk) => {
        return (
          chunk.fileName === "index.es.js" || chunk.fileName === "index.cjs.js"
        );
      },
    }),
    getBabelOutputPlugin({
      presets: ["@babel/preset-env"],
    }),
  ],
  build: {
    minify: true,
    lib: {
      entry: {
        index: path.resolve("src", "index.tsx"),
      },
      name: packageJson.name,
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});

export default libConfig;
