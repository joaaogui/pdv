import axios from './index'

const endpoint = 'api/restaurante/category'

const getCategories = () => axios.get(endpoint)

const getCategoryItens = (categoryId) => axios.get(`api/restaurante/category/${categoryId}/itens`)

export {
  getCategories,
  getCategoryItens
}
