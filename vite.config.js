import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Base path — se o site estiver em subpasta no servidor, ex: /giuliana/
  // Se estiver na raiz do domínio, deixe como '/'
  base: '/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        about:     resolve(__dirname, 'about.html'),
        neuroot:   resolve(__dirname, 'neuroot-case.html'),
        techback:  resolve(__dirname, 'techback-case.html'),
        previsul:  resolve(__dirname, 'previsul-case.html'),
        petrobras: resolve(__dirname, 'petrobras-case.html'),
        portfolio: resolve(__dirname, 'portfolio-case.html'),
      }
    }
  }
})
