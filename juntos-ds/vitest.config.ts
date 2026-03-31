import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // jsdom simulates a browser environment so React components can render in tests
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    // globals: true lets you use describe/it/expect without importing them
    globals: true,
    css: true,
  },
})
