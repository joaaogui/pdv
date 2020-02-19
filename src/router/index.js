import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/pdv',
    name: 'pdv',
    component: () => import('../views/Pdv.vue'),
    children: [
      {
        path: 'tables',
        name: 'tables',
        component: () => import('../components/Tables/Tables.vue')
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('../components/Menu/Menu.vue')
      },
      {
        path: 'menu/:id/submenu',
        name: 'submenu',
        component: () => import('../components/Menu/Submenu/Submenu.vue'),
        props: true
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../components/Orders/Orders.vue')
      },
    ]
  },

  {
    path: '/payment-confirmed',
    name: 'payment-confirmed',
    component: () => import('../components/PaymentConfirmed.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
