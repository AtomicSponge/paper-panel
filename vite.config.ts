import fs from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [ vue() ],
  server: {
    https: {
      key: fs.readFileSync(path.join('certs', 'RootCA-key.pem')),
      cert: fs.readFileSync(path.join('certs', 'RootCA.pem')),
      passphrase: fs.readFileSync(path.join('certs', 'passphrase')).toString()
    }
  }
})
