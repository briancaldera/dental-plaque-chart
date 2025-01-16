import {defineConfig} from 'vite'
import {resolve} from 'node:path'
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import {libInjectCss} from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        libInjectCss(),
        dts({include: ['lib']})
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es'],
            fileName: 'main'
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
        }
    },
})
