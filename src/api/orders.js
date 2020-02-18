import axios from './index'

const endpoint = '/orders'

const getOrders = () => axios.get(endpoint)

const getOrder = (orderId) => axios.get(endpoint, {orderId})

const getOrderItens = (orderId) => axios.get(`/orders/${orderId}/itens`)

export {
  getOrders,
  getOrder,
  getOrderItens
}
