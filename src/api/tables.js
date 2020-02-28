import axios from './index'

const endpoint = 'api/restaurante/tables'

const getTables = () => axios.get(endpoint)


const getTableOrders = (tableId) => axios.get(`api/restaurante/table/${tableId}/orders`)

export {
  getTables,
  getTableOrders
}
