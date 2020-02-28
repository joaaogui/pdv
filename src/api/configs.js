import axios from './index'

const endpoint = 'api/restaurante/configs'

const getConfigs = () => axios.get(endpoint)

export {
  getConfigs
}
