import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeOrder: {
      number: '',
      itens: {},
      customer: '',
      paymentMethod: 'phone'
    },
    rightSidebar: false,
    leftSidebar: false,
    tablePopover: false,
    activeTable: '',
    contentOverlay: false
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
    changePaymentMethod(state, paymentMethod) {
      state.activeOrder.paymentMethod = paymentMethod
    },
    changeOrderNumber(state, orderNumber) {
      state.activeOrder.number = orderNumber
    },
    changeActiveTable(state, table) {
      state.activeTable = table
    },
    toggleContentOverlay(state) {
      state.contentOverlay = !state.contentOverlay
    },
    addItemToOrder(state, item) {
      if (item.id in state.activeOrder.itens){
        state.activeOrder.itens[item.id].count += 1
      } else {
        state.activeOrder.itens[item.id] = item
        state.activeOrder.itens[item.id]['count'] = 1
      }
    }
  },
  getters: {
    itensLength(state){
      return Object.values(state.activeOrder.itens)
    }
  },
  actions: {},
  modules: {}
})
