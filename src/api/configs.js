import axios from './index'

const endpoint = '/configs'

const getConfigs = () => axios.get(endpoint)

export {
  getConfigs
}
