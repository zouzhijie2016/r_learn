import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://rap2api.taobao.org/app/mock/83398/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: '20000'
});

function get(url) {
    return new Promise((resolve, reject) => {
        instance.request({ url: url, methods: 'get' }).then(res =>{
            resolve(res.data)
        }).catch(err =>{
            if(err.response){
                reject(err.response.data)
            }else{
                reject(err)
            }
        })
    })
}

function post(url, options) {
    return new Promise((resolve, reject) => {
        instance.request({ url: url, methods: 'post', params: options }).then(res =>{
            resolve(res.data)
        }).catch(err =>{
            if(err.response){
                reject(err.response.data)
            }else{
                reject(err)
            }
        })
    })
}

export{
    get,
    post
}