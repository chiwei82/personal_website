import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import glsl from 'vite-plugin-glsl'

// https://vite.dev/config/
export default defineConfig({
  base: '/personal_website/',
  plugins: [
    react(),
    tailwindcss(),
    glsl({
      include: ['**/*.glsl', '**/*.vert', '**/*.frag'], // 允許這些副檔名被載入為模組
    }),],
})
