import axiosInstance from 'axios'

const axios = axiosInstance.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

export default axios
