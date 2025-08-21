import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'ChatWidget', // Global variable name in window.ChatWidget
      fileName: () => `chat-widget.iife.js`,
      formats: ['iife'],
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
