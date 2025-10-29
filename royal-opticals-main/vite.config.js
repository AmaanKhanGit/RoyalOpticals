// vite.config.js
import { defineConfig } from 'vite'

// ✅ this allows ngrok URLs and LAN access
export default defineConfig({
    server: {
        host: true,
        allowedHosts: ['.ngrok-free.dev'], // all ngrok tunnels allowed
    },
})
