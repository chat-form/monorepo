import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-react-pages'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import * as packageJson from './package.json'

const libConfig = defineConfig({
  plugins: [
    dts({
      outputDir: 'dist',
    }),
    tsConfigPaths(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (chunk) => {
        return chunk.fileName === 'index.js'
      },
    }),
  ],
  build: {
    minify: false,
    lib: {
      entry: {
        index: path.resolve('src', 'index.tsx'),
        // ...animations.reduce<Record<string, string>>((acc, animation) => {
        //   const dirname = path.dirname(animation)
        //   const basename = path.basename(animation, path.extname(animation))
        //   acc[path.join(dirname, basename)] = path.join('src', animation)
        //   return acc
        // }, {}),
      },
      name: packageJson.name,
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
})

export default libConfig
