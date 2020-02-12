import Vue from 'vue'
import Vuex from 'vuex'
import { getOrders } from "@/api/orders"
import { getTables } from "@/api/tables"
import {getCategories} from "@/api/categories"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
    order: {
      id: '',
      number: '',
      paymentMethod: 'phone'
    },
    rightSidebar: false,
    leftSidebar: false,
    tablePopover: false,
    table: {
      id: '',
      number: '',
    },
    contentOverlay: false,
    tables: [],
    itens: [],
    categories: [],
  },
  mutations: {
    setOrders(state, orders){
      state.orders = orders
    },
    setTables(state, tables){
      state.tables = tables
    },
    setCategories(state, categories){
      state.categories = categories
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
    changeTable(state, tableId) {
      state.table.id = tableId
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
      console.log(state.itens)
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
        let amount = state.itens.map(item => item.amount).reduce((prev, next) => prev + next)
        console.log(amount)
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
        const response = await getOrders()
        commit('setOrders', response.data.orders)
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
    },
    async getCategories({ commit }) {
      try {
        const response = await getCategories()
        commit('setCategories', response.data.categories)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})
