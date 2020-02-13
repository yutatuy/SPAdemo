import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/page01',
      name: 'Page01',
      component: () => import('@/views/Page01'),
    },
    {
      path: '/page01/item01',
      name: 'Item01',
      component: () => import('@/views/Page01/Item01'),
    },
    {
      path: '/page01/item02',
      name: 'Item02',
      component: () => import('@/views/Page01/Item02'),
    },
    {
      path: '/page01/item03',
      name: 'Item03',
      component: () => import('@/views/Page01/Item03'),
    },
    {
      path: '/page02',
      name: 'page02',
      component: () => import('@/views/Page02'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/News'),
    },
    {
      path: '/access',
      name: 'access',
      component: () => import('@/views/Access'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }; // トップに移動
  }
})

export default router
