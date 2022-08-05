import axios from 'axios'
import qs from 'qs'

// 配置请求地址
axios.defaults.baseURL = ''

axios.defaults.timeout = 20000

// 设置请求数据的格式
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = data => qs.stringify(data)

// 请求拦截器
axios.interceptors.request.use(config => {
  let token = localStorage.getItem('uiToken')
  token && (config.headers.Authorization = token)
  return config
}, error => Promise.reject(error))

// 响应拦截器
axios.defaults.validateStatus = status => /^(2|3)\d{2}$/.test(status)

axios.interceptors.response.use(response => {
  return response.data
},error => Promise.reject(error))

export default axios