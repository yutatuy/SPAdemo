import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Page01 from '@/views/Page01'
import Page02 from '@/views/page02'
import News from '@/views/News'
import Access from '@/views/Access'
// Page01,Newsの子ルート
import Item01 from '@/views/Page01/Item01'
import Item02 from '@/views/Page01/Item02'
import Item03 from '@/views/Page01/Item03'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/page01',
      name: 'Page01',
      component: Page01,
    },
    {
      path: '/page01/item01',
      name: 'Item01',
      component: Item01,
    },
    {
      path: '/page01/item02',
      name: 'Item02',
      component: Item02,
    },
    {
      path: '/page01/item03',
      name: 'Item03',
      component: Item03,
    },
    {
      path: '/page02',
      name: 'page02',
      component: Page02,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/access',
      name: 'access',
      component: Access,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }; // トップに移動
  }
})

export default router
