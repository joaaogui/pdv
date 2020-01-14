 import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightSidebar: false,
    leftSidebar: false
  },
  mutations: {
    toggleRightSidebar(state){
      state.rightSidebar = !state.rightSidebar
    },
    toggleLeftSidebar(state){
      state.leftSidebar = !state.leftSidebar
    }
  },
  getters: {
    rightSidebar(state){
      return state.rightSidebar
    },
    leftSidebar(state){
      return state.leftSidebar
    },
  },
  actions: {

  },
  modules: {
  }
})
