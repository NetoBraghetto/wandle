import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'admin.dev.localhost',
    open: true,
  },
  plugins: [react()]
})
