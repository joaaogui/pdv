import axios from './index'

const endpoint = '/tables'

const getTables = () => axios.get(endpoint)


const getTableOrders = (tableId) => axios.get(`/table/${tableId}/orders`)

export {
  getTables,
  getTableOrders
}
