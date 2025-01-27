import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@emailjs/browser': path.resolve(__dirname, 'node_modules/@emailjs/browser')
    }
  },
  optimizeDeps: {
    include: ['@emailjs/browser']
  }
})