import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./utils/filters"

// Vuetify
import vuetify from './plugins/vuetify'
require('@/scss/main.scss')

// Mirage
import mirage from './mirage/index.js'

import './registerServiceWorker'
mirage()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
