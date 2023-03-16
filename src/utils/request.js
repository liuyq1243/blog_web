import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: '', // api 的 base_url
    timeout: 20000 // 请求超时时间 10秒
})

// service.defaults.headers.common['Authorization'] = getCookie("token")

//request 拦截器
service.interceptors.request.use(

)

//response 拦截器
service.interceptors.response.use(

)

export default service