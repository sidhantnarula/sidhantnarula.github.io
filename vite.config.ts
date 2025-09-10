import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'



// https://vitejs.dev/config/
export default defineConfig({
  base: 'sidhantnarula.github.io',   // <-- must match the repository name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
