import axios from './index'

const endpoint = '/order'

const getOrders = () => axios.get(endpoint)

const getOrder = (orderId) => axios.get(endpoint, {orderId})

export {
  getOrders,
  getOrder
}
