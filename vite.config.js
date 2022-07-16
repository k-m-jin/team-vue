import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // root: __dirname,
  root: process.cwd(),
  plugins: [vue()],
})
