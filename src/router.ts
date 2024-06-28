import { createRouter, createMemoryHistory } from 'vue-router'

const Login = () => import('@/routes/Login.vue')
const User = () => import ('@/routes/User.vue')
const ServerList = () => import('@/routes/ServerList.vue')
const WorldList = () => import('@/routes/WorldList.vue')

const isAuthenticated = false

const routes = [
  { path: '/', component: ServerList },
  { path: '/user', component: User },
  { path: '/login', component: Login },
  { path: '/servers', component: ServerList },
  { path: '/worlds', component: WorldList }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

router.beforeEach(async (to, _from) => {
  if(!isAuthenticated && to.path !== '/login') {
    return { path: '/login' }
  }
})

export default router
