import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain (feeham.com / www.feeham.com) serves from root.
  base: '/',
  plugins: [
    {
      name: 'generate-blog-manifest',
      buildStart() {
        execSync('node scripts/generate-blog-manifest.mjs', { stdio: 'inherit' })
      },
    },
    react(),
    tailwindcss(),
  ],
})
