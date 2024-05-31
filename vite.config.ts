import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/client/ui'),
      '@pages': path.resolve(__dirname, './src/client/pages'),
      '@components': path.resolve(__dirname, './src/client/components'),
      '@client-utils': path.resolve(__dirname, './src/client/utils'),
      '@hooks': path.resolve(__dirname, './src/client/hooks'),
      '@api': path.resolve(__dirname, './src/client/api'),
      '@client-types': path.resolve(__dirname, './src/client/types'),
      '@store': path.resolve(__dirname, './src/client/store'),
    },
  },
});
