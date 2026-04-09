import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { resolve } from 'path'

export default {
  plugins: [
    react(),
    // Copies token CSS files to dist/tokens/ so consumers can import them directly
    viteStaticCopy({
      targets: [
        {
          src: 'src/tokens/*.css',
          dest: 'tokens',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src/index.js'),
      name: 'JuntosDS',
      formats: ['es', 'umd'],
      fileName: (format) => `juntos-ds.${format}.js`,
    },
    rollupOptions: {
      // React is NOT bundled — consumers provide their own
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
}
