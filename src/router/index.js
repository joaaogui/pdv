import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pdv',
    component: () => import('../components/Cards.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
