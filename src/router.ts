import { createRouter, createMemoryHistory } from 'vue-router'

const Login = () => import('./routes/Login.vue')
const ServerList = () => import('./routes/ServerList.vue')
const WorldList = () => import('./routes/WorldList.vue')

const isAuthenticated = false

const routes = [
  {
    path: '/',
    component: ServerList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/servers',
    name: 'Servers',
    component: ServerList
  },
  {
    path: '/worlds',
    name: 'Worlds',
    component: WorldList
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

router.beforeEach(async (to, _from) => {
  if(!isAuthenticated && to.name !== 'Login') {
    return { name: 'Login' }
  }
})

export default router
