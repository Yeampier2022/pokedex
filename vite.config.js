import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        pokemon: resolve(__dirname, 'src/home/pokemon.html'),
        singUp: resolve(__dirname, 'src/signUp/signUp.html'),
      },
    },
  },
});
