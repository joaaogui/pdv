import axios from './index'

const endpoint = 'restaurante/category'

const getCategories = () => axios.get(endpoint)

const getCategoryItens = (categoryId) => axios.get(`restaurante/category/${categoryId}/itens`)

export {
  getCategories,
  getCategoryItens
}
