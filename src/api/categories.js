import axios from './index'

const endpoint = '/category'

const getCategories = () => axios.get(endpoint)

const getCategoryItens = (categoryId) => axios.get(`/category/${categoryId}/itens`)

export {
  getCategories,
  getCategoryItens
}
