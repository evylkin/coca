import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
export default defineConfig({
  base: '/coca/',
  server: {
    port: 3000,
    open: true,
  },
  publicDir: 'icons',
  build: {
    outDir: '../build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        pricing: 'pricing.html',
        contact: 'contact.html',
      },
    },
  },
  plugins: [
    ViteMinifyPlugin(),
    injectHTML(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
