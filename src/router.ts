import { createRouter, createMemoryHistory } from 'vue-router'

const Login = () => import('./routes/Login.vue')
const ServerList = () => import('./routes/ServerList.vue')

const routes = [
  { path: '/', component: Login },
  { path: '/servers', component: ServerList }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
