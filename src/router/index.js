import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/home/Msite'
import Discover from '@/pages/discover/Discover'
import Order from '@/pages/order/Order'
import Profile from '@/pages/profile/Profile'
import Shop from '@/pages/shop/Shop'

// 因为在main.js页面要挂载路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/discover',
      component: Discover
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/shop',
      component: Shop
    }
  ]
})
