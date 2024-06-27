import fs from 'node:fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue() ],
  server: {
    https: {
      key: fs.readFileSync('./certs/RootCA-key.pem'),
      cert: fs.readFileSync('./certs/RootCA.pem'),
      passphrase: fs.readFileSync('./certs/passphrase').toString()
    }
  }
})
