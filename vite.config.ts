import {defineConfig} from 'vite'
import {resolve} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'DentalPlaqueChart',
            fileName: 'dental-plaque-chart',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    },
})
