import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/project-3/', // Use repository name as base path
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Ensure proper file extensions
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Ensure proper MIME types
    assetsInlineLimit: 0,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Add server configuration for development
  server: {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8'
    }
  }
});