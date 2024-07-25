/// <reference types="vitest" />

import path from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), stubNextAssetImport()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup',
    reporters: 'verbose',
    silent: true,
    resolveSnapshotPath(path, extension) {
      return path.replace(/\.test\.([tj]sx?)/, `.test.$1${extension}`)
    },
  },
})

/**
 * @see {@link https://github.com/vercel/next.js/issues/45350#issuecomment-1645556123 | Image with static import throws an error with Vitest}
 */
function stubNextAssetImport() {
  return {
    name: 'stub-next-asset-import',
    transform(_: string, id: string) {
      if (/(jpg|jpeg|png|webp|gif|svg)$/.test(id)) {
        let imgSrc = path.relative(process.cwd(), id)

        if (process.platform === 'win32') {
          imgSrc = imgSrc.replaceAll('\\', '/')
        }

        return {
          code: `export default { src: '/${imgSrc}', height: 1, width: 1 }`,
        }
      }
    },
  }
}
