import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.ts'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(router)
  return { app }
}
