import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; 

export default defineConfig({
    plugins: [
        sveltekit(),
        imagetools(),
        ViteImageOptimizer({
            // webp: {
            //     quality: 80,
            // },
            // jpeg: {
            //     quality: 75,
            // },
            // png: {
            //     quality: 75,
            // },
            // avif: {
            //     quality: 70,
            // },
            cache: true,
        }),
    ],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
