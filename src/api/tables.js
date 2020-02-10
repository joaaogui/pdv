import axios from './index'

const endpoint = '/tables'

const getTables = () => axios.get(endpoint)

const getTable = (tableId) => axios.get(endpoint, {tableId})

export {
  getTables,
  getTable
}
