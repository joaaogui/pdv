import axiosInstance from 'axios'

const axios = axiosInstance.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})

export default axios
