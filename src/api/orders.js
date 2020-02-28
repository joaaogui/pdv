import axios from './index'

const endpoint = 'api/restaurante/orders'

const getOrders = () => axios.get(endpoint)

const getOrder = (orderId) => axios.get(endpoint, {orderId})

const getOrderItens = (orderId) => axios.get(`api/restaurante/orders/${orderId}/itens`)

export {
  getOrders,
  getOrder,
  getOrderItens
}
