import axiosInstance from "axios"

const axios = axiosInstance.create({
  baseURL: process.env.VUE_APP_API_URL,
})


const login = ({input, password}) => axios.get(`https://kadde-dev-api.azurewebsites.net/api/autorizacao/verificar?email=${input}&senha=${password}`)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

function establishmentLogin(loginData){
  const searchParams = new URLSearchParams()
  for (const prop in loginData) {
    searchParams.set(prop, loginData[prop])
  }
  return axios.post(`https://kadde-dev-auth.azurewebsites.net/api/oauth2/token`, searchParams, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
}

export {
  login,
  establishmentLogin
}
