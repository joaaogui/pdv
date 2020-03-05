import axiosInstance from 'axios'
import axios from './index'

const verifyAccount = ({ input, password }) => axios.get(`autorizacao/verificar?email=${input}&senha=${password}`)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

function login (loginData) {
  const searchParams = new URLSearchParams()
  for (const attr in loginData) {
    searchParams.set(attr, loginData[attr])
  }
  let axios = axiosInstance.create({
    baseURL: process.env.VUE_APP_AUTH_URL
  })
  return axios.post(`oauth2/token`, searchParams, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

export {
  verifyAccount,
  login
}
