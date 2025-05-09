import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/TrendAnalyzer-AI/', // this is essential!
  plugins: [react()],
})
