import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    // Generates TypeScript declaration files (.d.ts) into dist/types/
    dts({
      include: ['src'],
      exclude: [
        'src/**/*.stories.tsx',
        'src/**/*.test.tsx',
        'src/test-setup.ts',
      ],
      outDir: 'dist/types',
      insertTypesEntry: true,
    }),
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
      entry: resolve(__dirname, 'src/index.ts'),
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
})
