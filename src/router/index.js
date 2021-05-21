import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/creditos',
    name: 'credits',
    meta: { isPublic: false },
    component: () =>  import('@/views/home/Credits.vue')
  },
  {
    path: '/inspeccionar',
    name: 'inspect',
    meta: { isPublic: false },
    component: () =>  import('@/views/home/Inspect.vue')
  },
  {
    path: '/inspeccionar/control-cambios',
    name: 'changes',
    meta: { isPublic: false },
    component: () =>  import('@/views/home/Changes.vue')
  },
  {
    path: '/softwares',
    name: 'softwares',
    meta: { isPublic: false },
    component: () =>  import('@/views/home/Softwares.vue')
  },
  {
    path: '/software/nuevo',
    name: 'newSoftware',
    meta: { isPublic: false },
    component: () =>  import('@/views/home/NewSoftware.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { isPublic: true },
    component: () =>  import('@/views/auth/Login.vue')
  },
  {
    path: '/registro',
    name: 'register',
    meta: { isPublic: true },
    component: () =>  import('@/views/auth/Register.vue')
  },
  {
    path: '*',
    name: 'page404',
    meta: { isPublic: true },
    component: () => import('@/views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !store.getters.isAuthenticated) {
    return next({ name: 'login' })
  }

  if (to.name === 'login' && store.getters.isAuthenticated) {
    return next({ name: 'softwares' })
  }

  return next()
})

export default router
