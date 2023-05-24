import { defineConfig } from 'vite'
import * as path from 'path'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'
import glob from 'fast-glob';

const animations = glob.sync('**/*/index.ts', {
  ignore: ['**/node_modules'],
  cwd: 'src',
});

const libConfig = defineConfig({
  plugins: [
    dts({
      outputDir: 'dist',
    }),
    tsConfigPaths(),
  ],
  build: {
    minify: false,
    lib: {
      entry: animations.reduce<Record<string, string>>((acc, animation) => {
        const dirname = path.dirname(animation)
        acc[dirname] = path.join('src', animation)
        return acc
      }, {}),
      name: packageJson.name,
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
    }
  },
})

export default libConfig
