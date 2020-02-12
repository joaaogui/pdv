import axios from './index'

const endpoint = '/orders'

const getOrders = () => axios.get(endpoint)

const getOrder = (orderId) => axios.get(endpoint, {orderId})

const getOrderItens = (orderId) => axios.get(`/table/${orderId}/orders`)

export {
  getOrders,
  getOrder,
  getOrderItens
}
