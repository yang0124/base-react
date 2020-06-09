import axios from 'axios'

const instance = axios.create({
    baseURL:'http://rap2api.taobao.org/app/mock/235673/get'
})

// 任务列表相关api接口
export const getTodoList = (url)=>{
    return instance.get(url)
}
// export const getTodoList = (url)=>{
//     return instance.get(url)
// }
// export const getTodoList = (url)=>{
//     return instance.get(url)
// }

// 跟购物车相关的api接口

// export const getTodoList = (url)=>{
//     return instance.get(url)
// }
// export const getTodoList = (url)=>{
//     return instance.get(url)
// }
