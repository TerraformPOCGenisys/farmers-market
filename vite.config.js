import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/farmers-market/',
  server: {
    proxy: {
      '/FarmersAPI': {
        target: 'http://db-server-india.centralindia.cloudapp.azure.com/FarmersAPI/api',
        changeOrigin: true,
        secure: false,
      },
    },
  }
});
