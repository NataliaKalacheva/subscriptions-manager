import axios from 'axios'
import interceptors from './interceptors'

const instance = axios.create({
  baseURL: 'http://localhost:3333/'
})

interceptors(instance)

export default instance
