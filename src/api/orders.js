import axios from './index'

const endpoint = 'restaurante/orders'

const getOrders = () => axios.get(endpoint)

const getOrder = (orderId) => axios.get(endpoint, { orderId })

const getOrderItens = (orderId) => axios.get(`restaurante/order/${orderId}/itens`)

const sendOrder = (idEstabelecimento, order) => axios.put(`restaurante/pedido/${idEstabelecimento}`, order)

const payOrder = (idEstabelecimento, order) => axios.put(`restaurante/pedido/checkout/${idEstabelecimento}`, order)

export {
  getOrders,
  getOrder,
  getOrderItens,
  sendOrder,
  payOrder
}
