import { defineConfig } from 'vite';
import postcss from '../../../postcss.config.js';
export default defineConfig({
  root: './src/frontend/admin',
  build: {
    outDir: '../../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/frontend/admin/admin.html'
    }
  },
  css: {
    postcss
  },
  publicDir: 'public',
});
