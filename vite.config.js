import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves your site from `/<repo>/`, not `/`.
  // If your repository name is not "Portfolio", change this to `/<your-repo-name>/`.
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
