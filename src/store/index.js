 import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightSidebar: false
  },
  mutations: {
    toggleRightSidebar(state){
      state.rightSidebar = !state.rightSidebar
    }
  },
  getters: {
    rightSidebar(state){
      return state.rightSidebar
    }
  },
  actions: {

  },
  modules: {
  }
})
