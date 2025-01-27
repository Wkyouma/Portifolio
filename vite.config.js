import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@emailjs/browser': '@emailjs/browser'
    }
  },
  build: {
    rollupOptions: {
      external: ['@emailjs/browser']
    }
  }
})