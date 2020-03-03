import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)
console.log(store)
console.log(process.env)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/establishments',
    name: 'establishments',
    component: () => import('../components/Establishments.vue'),
    props: true
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

router.beforeEach((to, from, next) => {
  if (from.name !== 'establishments' && to.name !== 'establishments' && to.name !== 'login' && !store.getters.isAuthenticated) next({ path: '/' })
  else next()
})

export default router
