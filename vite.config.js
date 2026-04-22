import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain (feeham.com / www.feeham.com) serves from root.
  base: '/',
  plugins: [react(), tailwindcss()],
})
