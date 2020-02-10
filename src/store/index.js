import Vue from 'vue'
import Vuex from 'vuex'
import { getOrders } from "@/api/orders"
import { getTables } from "@/api/tables"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
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
    setOrders(state, orders){
      state.orders = orders
    },
    setTables(state, tables){
      state.tables = tables
    },
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
  actions: {
    async getOrders({ commit }) {
      try {
        const orders = await getOrders()
        commit('setOrders', orders)
      } catch (error) {
        console.log(error)
      }
    },
    async getTables({ commit }) {
      try {
        const response = await getTables()
        commit('setTables', response.data.tables)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})
