import axiosInstance from 'axios'

const axios = axiosInstance.create({
  baseURL: process.env.dev_api_url,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

})

export default axios
