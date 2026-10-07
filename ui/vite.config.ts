import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'https://49cb097e18987eab66.gradio.live',
      '/classic': 'https://49cb097e18987eab66.gradio.live',
    },
  },
  // Strip console.* and debugger statements from the production bundle.
  // Dev mode (npm run dev) is unaffected — esbuild `drop` only runs at
  // build time.
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
