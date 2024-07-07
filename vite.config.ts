import path from 'path'
import md from 'unplugin-vue-markdown/vite'
import vue from '@vitejs/plugin-vue'
import {telefunc} from 'telefunc/vite'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [vike({}), devServer({
    entry: "hono-entry.ts",

    exclude: [
      /^\/@.+$/,
      /.*\.(ts|tsx|vue)($|\?)/,
      /.*\.(s?css|less)($|\?)/,
      /^\/favicon\.ico$/,
      /.*\.(svg|png)($|\?)/,
      /^\/(public|assets|static)\/.+/,
      /^\/node_modules\/.*/,
    ],

    injectClientScript: false,
  }), telefunc(), vue({
    include: [/\.vue$/, /\.md$/],
  }), md({})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname)
    }
  }
})
