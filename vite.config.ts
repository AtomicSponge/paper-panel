import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@/components', replacement: path.resolve(__dirname, 'src', 'components')},
      { find: '@/routes', replacement: path.resolve(__dirname, 'src', 'routes')},
      { find: '@/stores', replacement: path.resolve(__dirname, 'src', 'stores')}
    ]
  },
  plugins: [ vue() ]
})
