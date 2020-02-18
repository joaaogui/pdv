import Vue from 'vue'
import Vuex from 'vuex'
import {getOrders} from "@/api/orders"
import {getTables} from "@/api/tables"
import {getCategories} from "@/api/categories"
import {getConfigs} from "@/api/configs"
import {getOrderItens} from "../api/orders"

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
      number: ''
    },
    contentOverlay: false,
    tables: [],
    itens: [],
    categories: [],
    couvertPrice: 0,
    couvertAmount: 0,
    tipPercentage: 0,
    discount: 0,
    category: ''
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders
    },
    setTables(state, tables) {
      state.tables = tables
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    setItens(state, itens) {
      state.itens = itens
    },
    setConfigs(state, configs) {
      state.couvertPrice = configs.couvertPrice
      state.tipPercentage = configs.tipPercentage
    },
    setDiscount(state, discount){
      state.discount = discount
    },
    setCategory(state, category){
      state.category = category
    },
    setTip(state, tipPercentage){
      state.tipPercentage = tipPercentage
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
    changeOrder(state, order) {
      state.order.id = order.id
      state.order.number = order.number
    },
    changeTable(state, table) {
      state.table.id = table.id
      state.table.number = table.number
    },
    toggleContentOverlay(state) {
      state.contentOverlay = !state.contentOverlay
    },
    addItem(state, item) {
      let existingItem = state.itens.find(i => i.id === item.id)
      if (existingItem) {
        existingItem.amount += 1
      } else {
        state.itens.push(item)
      }
    },
    removeItem(state, id) {
      state.itens = state.itens.filter(i => i.id !== id)
    },
    removeUnit(state, id) {
      let existingItem = state.itens.find(i => i.id === id)
      existingItem.amount -= 1
    },
    addCouvert(state) {
      state.couvertAmount += 1
    },
    removeCouvert(state) {
      if (state.couvertAmount > 0) {
        state.couvertAmount -= 1
      }
    },
    startNewOrder(state, newTable = false) {
      state.order.id = ''
      state.order.number = ''
      state.itens = []
      if (newTable){
        state.table.number = ''
        state.table.id = ''
      }
      if (!state.rightSidebar){
        state.rightSidebar = !state.rightSidebar
      }
    }
  },
  getters: {
    itensLength(state) {
      if (state.itens.length) {
        return state.itens.map(item => item.amount).reduce((prev, next) => prev + next)
      } else {
        return 0
      }
    },
    itensPrice(state) {
      if (state.itens.length) {
        return state.itens.map(item => item.price * item.amount).reduce((prev, next) => prev + next)
      } else {
        return 0
      }
    },
    tipValue(state, getters) {
      if (state.itens.length) {
        return getters.itensPrice * (state.tipPercentage / 100)
      } else {
        return 0
      }
    },
    couvertTotalPrice(state) {
      return state.couvertAmount * state.couvertPrice
    },
    totalPrice(state, getters) {
      return getters.itensPrice + getters.tipValue + getters.couvertTotalPrice - state.discount
    }
  },
  actions: {
    async getOrders({commit}) {
      try {
        const response = await getOrders()
        commit('setOrders', response.data.orders)
      } catch (error) {
        console.log(error)
      }
    },
    async getTables({commit}) {
      try {
        const response = await getTables()
        commit('setTables', response.data.tables)
      } catch (error) {
        console.log(error)
      }
    },
    async getCategories({commit}) {
      try {
        const response = await getCategories()
        commit('setCategories', response.data.categories)
      } catch (error) {
        console.log(error)
      }
    },
    async getConfigs({commit}) {
      try {
        const response = await getConfigs()
        commit('setConfigs', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getOrderItens({commit}, orderId) {
      try {
        const response = await getOrderItens(orderId)
        commit('setItens', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})
