import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

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
        component: () => import('../components/tables/Tables.vue')
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('../components/categories/Categories.vue')
      },
      {
        path: 'category/:id/itens',
        name: 'itens',
        component: () => import('../components/categories/itens/Itens.vue'),
        props: true
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../components/orders/Orders.vue')
      }
    ]
  },

  {
    path: '/payment-confirmed',
    name: 'payment-confirmed',
    component: () => import('../components/PaymentConfirmed.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (from.name !== 'establishments' && to.name !== 'establishments' && to.name !== 'login' && !store.getters.isAuthenticated) {
    next({ path: '/' })
  } else if (store.getters.isAuthenticated && to.name === 'login') {
    next({ path: '/pdv/tables' })
  } else {
    next()
  }
})

export default router
