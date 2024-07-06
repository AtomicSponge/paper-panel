import vikeVue from 'vike-vue/config'
import type { Config } from 'vike/types'
import Head from '@/layouts/HeadDefault.vue'

// Default config (can be overridden by pages)
export default {
  Head,

  passToClient: [ 'user' ],
  // <title>
  title: 'Paper Panel',
  extends: vikeVue,
} satisfies Config;
