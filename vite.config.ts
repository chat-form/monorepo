import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-react-pages'
import tsConfigPaths from 'vite-tsconfig-paths'

const docConfig = defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    pages({
      pagesDir: path.join(__dirname, './docs')
    }),
  ],
  build: {
    outDir: 'docs-dist'
  }
})

export default docConfig;
