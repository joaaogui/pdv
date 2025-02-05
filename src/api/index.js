import axiosInstance from 'axios'

const axios = axiosInstance.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})

axios.interceptors.response.use(function (response) {
  if (response.data.success) {
    return response
  } else {
    if (response.data.friendlyMessage.length) {
      let message = response.data.friendlyMessage.join('. ')
      throw new Error(message)
    } else {
      throw new Error(response.data.message)
    }
  }
}, function (error) {
  return Promise.reject(error)
})

export default axios
