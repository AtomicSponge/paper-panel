import { createRouter, createMemoryHistory } from 'vue-router'

const Login = () => import('./routes/Login.vue')
const ServerList = () => import('./routes/ServerList.vue')
const WorldList = () => import('./routes/WorldList.vue')

const routes = [
  { path: '/', component: Login },
  { path: '/servers', component: ServerList },
  { path: '/worlds', component: WorldList }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
