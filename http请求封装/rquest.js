import axios from 'axios'
const service = axios.create({
  baseURL: 'https://apis.imoock.com',
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    if(response.state === 200 && response.data) {
      return response.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service