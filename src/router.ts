import { createRouter, createMemoryHistory } from 'vue-router'

const Login = () => import('./routes/Login.vue')

const routes = [
  { path: '/', component: Login }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
