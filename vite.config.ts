import {defineConfig} from 'vite'
import {resolve} from 'node:path'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      react()
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.js'),
            name: 'DentalPlaqueChart',
            fileName: format => `dental-plaque-chart.${format}.ts`,
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
