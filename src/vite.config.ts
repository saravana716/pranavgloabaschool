import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env'
import postcssCascadeLayers from '@csstools/postcss-cascade-layers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssCascadeLayers(),
        postcssPresetEnv({
          stage: 3,
          features: {
            'oklab-function': { preserve: true }
          }
        })
      ]
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: ['es2015', 'safari11'],
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          forms: ['react-hook-form'],
          icons: ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    open: true
  },
  preview: {
    port: 4173,
    host: true
  }
})