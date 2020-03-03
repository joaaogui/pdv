import axios from './index'

const endpoint = 'restaurante/configs'

const getConfigs = () => axios.get(endpoint)

export {
  getConfigs
}
