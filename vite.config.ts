import path from 'path'
import md from 'unplugin-vue-markdown/vite'
import vue from '@vitejs/plugin-vue'
import ssr from 'vike/plugin'
import trpc from '@/trpc/vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    trpc(),
    ssr(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }), md({})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname)
    }
  }
})
