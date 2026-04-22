import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Using a custom domain (www.feeham.com), so the site is served from `/`.
  base: '/',
  plugins: [react(), tailwindcss()],
})
