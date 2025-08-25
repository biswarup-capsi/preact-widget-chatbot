import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'ChatWidget', 
      formats: ['iife','es','cjs','umd','system'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      }
    },
    outDir: 'dist',
    minify: 'esbuild'
  }
})
