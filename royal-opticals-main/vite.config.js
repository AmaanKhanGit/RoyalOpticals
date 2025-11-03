// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

// ✅ this allows ngrok URLs and LAN access
export default defineConfig({
    server: {
        host: true,
        allowedHosts: ['.ngrok-free.dev'], // all ngrok tunnels allowed
    },
    base: './', // 👈 ensures assets load even when opened directly (file://)
    build: {
        outDir: 'dist',      // output folder name (changeable)
        assetsDir: 'assets', // css/js/images folder
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // Agar future me aur pages add karo to yahan likh dena:
                // about: resolve(__dirname, 'about.html'),
                // contact: resolve(__dirname, 'contact.html'),
            }
        }
    }
})
