import axios from './index'

const endpoint = 'restaurante/orders'

const getOrders = () => axios.get(endpoint)

const getOrder = (orderId) => axios.get(endpoint, {orderId})

const getOrderItens = (orderId) => axios.get(`restaurante/order/${orderId}/itens`)

export {
  getOrders,
  getOrder,
  getOrderItens
}
