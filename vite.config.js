import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:           resolve(__dirname, 'index.html'),
        about:          resolve(__dirname, 'about.html'),
        trabalheComigo: resolve(__dirname, 'trabalhe-comigo.html'),
        aprender:       resolve(__dirname, 'aprender.html'),
        neuroot:        resolve(__dirname, 'neuroot-case.html'),
        oraculo:        resolve(__dirname, 'oraculo-case.html'),
        portfolio:      resolve(__dirname, 'portfolio-case.html'),
        techback:       resolve(__dirname, 'techback-case.html'),
        petrobras:      resolve(__dirname, 'petrobras-case.html'),
        previsul:       resolve(__dirname, 'previsul-case.html'),
        cpfl:           resolve(__dirname, 'cpfl-case.html'),
        bbInfluencer:   resolve(__dirname, 'bb-influencer-case.html'),
      }
    }
  }
})
