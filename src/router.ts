import { createRouter, createMemoryHistory } from 'vue-router'

import { authStore } from '@/stores/authStore'

const Login = () => import('@/routes/Login.vue')
const User = () => import ('@/routes/User.vue')
const ServerList = () => import('@/routes/ServerList.vue')
const WorldList = () => import('@/routes/WorldList.vue')

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
  const isAuthenticated = authStore()
  //to.meta.requiresAuth
  if(!isAuthenticated.value && to.path !== '/login') {
    return { path: '/login' }
  }
})

export default router
