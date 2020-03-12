import Vue from 'vue'
import Vuex from 'vuex'
import {getOrders} from '@/api/orders'
import {getTables} from '@/api/tables'
import {getCategories} from '@/api/categories'
import {getConfigs} from '@/api/configs'
import {getOrderItens} from '../api/orders'
import {login} from '../api/login'
import router from '../router'
import {optionsPrice} from '../utils/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    orders: [],
    order: {
      id: null,
      number: null,
      userName: null,
      paymentMethod: 'phone'
    },
    rightSidebar: false,
    leftSidebar: false,
    tablePopover: false,
    table: {
      id: null,
      number: null
    },
    contentOverlay: false,
    tables: [],
    itens: [],
    categories: [],
    couvertPrice: 0,
    couvertAmount: localStorage.getItem('couvertAmount') || 0,
    tipPercentage: localStorage.getItem('tipPercentage') || 0,
    discount: 0,
    category: '',
    establishment: {
      id: localStorage.getItem('establishmentId') || null,
      name: localStorage.getItem('establishmentName') || null
    },
    establishments: JSON.parse(localStorage.getItem('establishments')) || [],
    totalSpending: 0,
    token: localStorage.getItem('token') || '',
    status: '',
    error: '',
    snackbar: {
      visible: false,
      text: null,
      timeout: 6000,
      multiline: false,
    }
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders
    },
    setStatus(state, status) {
      state.status = status
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
    setEstablishment(state, establishment) {
      state.establishment.id = establishment.id
      state.establishment.name = establishment.nome
      localStorage.setItem('establishmentId', establishment.id)
      localStorage.setItem('establishmentName', establishment.nome)
    },
    setEstablishments(state, establishments) {
      state.establishments = establishments
      localStorage.setItem('establishments', JSON.stringify(establishments))
    },
    setConfigs(state, configs) {
      state.couvertPrice = configs.couvertPrice
      localStorage.setItem('couvertPrice', configs.couvertPrice)
      state.tipPercentage = configs.tipPercentage
      localStorage.setItem('tipPercentage', configs.tipPercentage)
    },
    setDiscount(state, discount) {
      state.discount = discount
    },
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    removeToken(state) {
      state.token = ''
      localStorage.removeItem('token')
    },
    setCategory(state, category) {
      state.category = category
    },
    setTip(state, tipPercentage) {
      state.tipPercentage = tipPercentage
    },
    setError(state, error) {
      state.error = error
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
    setOrderName(state, orderName) {
      state.order.userName = orderName
    },
    changeOrder(state, order) {
      state.order = order
      if (!state.rightSidebar) {
        state.rightSidebar = !state.rightSidebar
      }
    },
    changeTable(state, table) {
      state.table = table
      state.order = {}
    },
    toggleContentOverlay(state) {
      state.contentOverlay = !state.contentOverlay
    },
    addItem(state, originalItem) {
      // let existingItem = state.itens.find(i => i.id === item.id)
      // if (existingItem) {
      //   existingItem.amount += 1
      // } else {
      //   state.itens.push(item)
      // }
      state.itens.push(originalItem)
    },
    addOption(state, option) {
      let item = state.itens.slice(-1)[0]
      if ('itens' in item) {
        item.itens.push(option)
      } else {
        item.itens = []
        item.itens.push(option)
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
      state.order = {}
      state.itens = []
      state.status = 'newOrder'
      if (!state.rightSidebar) {
        state.rightSidebar = !state.rightSidebar
      }
      router.push({name: 'category'})
    },
    showSnackbar(state, payload) {
      state.snackbar.text = payload.text
      state.snackbar.multiline = payload.text.length > 50

      if (payload.multiline) {
        state.snackbar.multiline = payload.multiline
      }

      if (payload.timeout) {
        state.snackbar.timeout = payload.timeout
      }

      state.snackbar.visible = true
    },
    closeSnackbar(state) {
      state.snackbar.visible = false
      state.snackbar.multiline = false
      state.snackbar.timeout = 6000
      state.snackbar.text = null
    },
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
        return state.itens.map(item => (item.price + optionsPrice(item)) * item.amount).reduce((prev, next) => prev + next)
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
    },
    isAuthenticated: state => !!state.token

  },
  actions: {
    async getOrders({commit}) {
      try {
        const response = await getOrders()
        commit('setOrders', response.data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getTables({commit}) {
      try {
        const response = await getTables()
        commit('setTables', response.data.data)
      } catch (error) {
        commit('setError', error.message)
      }
    },
    async getCategories({commit}) {
      try {
        const response = await getCategories()
        commit('setCategories', response.data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getConfigs({commit}) {
      try {
        const response = await getConfigs()
        commit('setConfigs', response.data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getOrderItens({commit}, orderId) {
      try {
        const response = await getOrderItens(orderId)
        commit('setItens', response.data.data)
        commit('setStatus', 'existingOrder')
      } catch (error) {
        console.log(error)
      }
    },

    async establishmentLogin({commit, dispatch}, loginData) {
      try {
        const response = await login(loginData)
        commit('setToken', response.data.access_token)
        dispatch('getConfigs')
      } catch (error) {
        console.log(error)
      }
    },
    async logout({commit}) {
      try {
        commit('removeToken')
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})

export default store
