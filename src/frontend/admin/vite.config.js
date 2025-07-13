import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, '../../../public/admin.html')
    },
    outDir: path.resolve(__dirname, '../../../dist'),
    emptyOutDir: true
  }
});
