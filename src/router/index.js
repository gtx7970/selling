import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods'
import rating from '../components/ratings/rating'
import seller from '../components/seller/seller'


Vue.use(Router)

export default new Router({
  routes: [
    {
    path:'/',
    redirect: '/goods'
    },
    {
    path: '/goods',
    component: goods
    },
    {
    path: '/rating',
    component: rating
    },
    {
    path: '/seller',
    component: seller
    }
  ]
})
