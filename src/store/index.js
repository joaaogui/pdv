import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightSidebar: false,
    leftSidebar: false,
    tablePopover: false,
    activePaymentForm: 'card',
    activeOrder: ''
  },
  mutations: {
    toggleRightSidebar(state) {
      state.rightSidebar = !state.rightSidebar
    },
    toggleLeftSidebar(state) {
      state.leftSidebar = !state.leftSidebar
    },
    toggleTablePopover(state) {
      state.tablePopover = !state.tablePopover
    },
    changeActivePaymentForm(state, paymentForm) {
      state.activePaymentForm = paymentForm
    },
    changeActiveOrder(state, order) {
      state.activeOrder = order
    }
  },
  getters: {
    rightSidebar(state) {
      return state.rightSidebar
    },
    leftSidebar(state) {
      return state.leftSidebar
    },
    tablePopover(state) {
      return state.leftSidebar
    },
    activePaymentForm(state) {
      return state.activePaymentForm
    },
    activeOrder(state) {
      return state.activeOrder
    }
  },
  actions: {},
  modules: {}
})
