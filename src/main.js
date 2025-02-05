import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/filters'
import './registerServiceWorker'
// Vuetify
import vuetify from './plugins/vuetify'

require('@/scss/main.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
