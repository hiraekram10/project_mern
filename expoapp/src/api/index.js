import axios from 'axios'

// interceptors
const apiClient= axios.create({
    baseURL:'http://192.168.0.101:5001/',
    timeout:3000,
    headers:{
        "content-Type":"application/json"
    }
})


// apiClient.interceptors.response.use((res)=>{
//     return res

// },(error)=>{
//    return Promise.reject(error)
// })

export default apiClient