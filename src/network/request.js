import axios from 'axios'

export function request(config){
    // 1.创建axios 的实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })

    // 2.axios的拦截器
    // 1.请求拦截的作用
    // 例子。拦截。函数的USE的参数。
    instance.interceptors.request.use(config => {
        return config
    },err => {

    })

    // 2.2响应拦截

    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err);
    })

    // 3.发送网络请求
    return instance(config)
}