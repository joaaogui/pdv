import axios from './index'

const endpoint = '/tables'

const getTables = () => axios.get(endpoint)

const getTable = (tableId) => axios.get(`/tables/${tableId}`)

const getTableOrders = (tableId) => axios.get(`/table/${tableId}/orders`)

export {
  getTables,
  getTable,
  getTableOrders
}
