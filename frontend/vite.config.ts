import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    preserveSymlinks: true,
    conditions: ['import', 'module', 'node'],
    dedupe: ['react', 'react-dom']
  }
})
