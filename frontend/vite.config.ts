import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    watch: {
      usePolling: true
    }
  },
  plugins: [react()]
});
