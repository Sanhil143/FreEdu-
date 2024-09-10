import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // To allow access from any IP address
    port: 3000, // You can specify the port (default is 5173)
  },
})
