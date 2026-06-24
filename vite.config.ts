import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['bada-2a04-800-3640-1601-6cc6-d8a5-2b86-81d7.ngrok-free.app'],
  },
})
