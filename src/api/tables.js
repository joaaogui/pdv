import axios from './index'

const endpoint = 'restaurante/tables'

const getTables = () => axios.get(endpoint)

const getTableOrders = (tableId) => axios.get(`restaurante/table/${tableId}/orders`)

export {
  getTables,
  getTableOrders
}
