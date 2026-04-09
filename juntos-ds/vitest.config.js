import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  test: {
    // jsdom simulates a browser environment so React components can render in tests
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.js'],
    // globals: true lets you use describe/it/expect without importing them
    globals: true,
    css: true,
  },
}
