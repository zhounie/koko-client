import axios from 'axios'
import { BASE_URL } from './index'


axios.defaults.baseURL = BASE_URL

export const POST = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, { ...params }).then(res => {
            resolve(res.data)
        }).catch((err) => {
            reject(err.data)
        })
    })
}

export const GET = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { ...params }).then(res => {
            resolve(res.data)
        }).catch((err) => {
            reject(err.data)
        })
    })
}
