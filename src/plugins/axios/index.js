import axios from 'axios'
import interceptors from './interceptors'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL
})

interceptors(instance)

export default instance
