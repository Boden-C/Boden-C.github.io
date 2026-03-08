import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './src',
    build: {
        outDir: '..',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                audiostudio: resolve(__dirname, 'src/audiostudio.html')
            }
        }
    }
})