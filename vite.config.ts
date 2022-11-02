import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Vue3LibraryReproduction',
      // the proper extensions will be added
      fileName: 'vue3-library-reproduction',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        'swiper/vue',
        'swiper/css',
        'swiper/css/pagination',
        'swiper/css/effect-fade',
        'swiper/css/free-mode',
        'swiper/css/navigation',
        'swiper/css/thumbs',
        'swiper',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    dedupe: ['vue'],
    // Caution: manage changes also in /.storybook/main.cjs
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './assets'),
    },
  },
  plugins: [vue()],
});
