import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/// <reference types="vitest" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // @ts-expect-error Safe to ignore
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    globals: true,
  },
})
