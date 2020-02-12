import Vue from 'vue'
import Vuex from 'vuex'
import { getOrders } from "@/api/orders"
import { getTables } from "@/api/tables"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
    order: {
      number: '',
      paymentMethod: 'phone'
    },
    rightSidebar: false,
    leftSidebar: false,
    tablePopover: false,
    table: {
      number: '',
    },
    contentOverlay: false,
    tables: [],
    itens: []
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
      state.order.paymentMethod = paymentMethod
    },
    changeOrderNumber(state, orderNumber) {
      state.order.number = orderNumber
    },
    changeTableNumber(state, tableNumber) {
      state.table.number = tableNumber
    },
    toggleContentOverlay(state) {
      state.contentOverlay = !state.contentOverlay
    },
    addItem(state, item) {
      let oldItem = state.itens.find(i => i.id === item.id)
      if (oldItem){
        oldItem.amount += 1
      } else {
        state.itens.push(item)
      }
    },
    removeItem(state, id) {
      state.itens = state.itens.filter(i => i.id !== id)
    },
    removeUnit(state, id) {
      let oldItem = state.itens.find(i => i.id === id)
      oldItem.amount -= 1
    }
  },
  getters: {
    itensLength(state){
      if (state.itens.length){
        return state.itens.map(item => item.amount).reduce((prev, next) => prev + next)
      } else {
        return 0
      }
    },
    itensPrice(state){
      if (state.itens.length){
        return state.itens.map(item => item.price).reduce((prev, next) => prev + next)
      } else {
        return 0
      }
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
