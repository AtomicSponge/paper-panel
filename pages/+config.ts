import vikeVue from 'vike-vue/config'
import type { Config } from 'vike/types'
import Head from '@/layouts/HeadDefault.vue'

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  //# BATI.has("auth0") || BATI.has("firebase-auth") || BATI.has("authjs")
  passToClient: [ 'user' ],
  title: 'Paper Panel',
  extends: vikeVue,
  stream: 'web',
} satisfies Config;
