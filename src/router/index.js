import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tables',
    name: 'tables',
    component: () => import('../components/Tables.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../components/Menu.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../components/Orders.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
