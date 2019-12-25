import IO from 'socket.io-client'
import store from '../redux/index'
import { RECEIVE } from '../redux/types'


const socket = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    let socket = IO.connect(`http://localhost:3000?userName=${user.userName}&userId=${user.id}`)
    
    socket.on('receive', (msg) => {
        let receiveMsg = {
            id: 1,
            message: msg.hello
        }
        store.dispatch({
            type: RECEIVE,
            data: {
                receiveMsg
            }
        })
    })
    return socket
}

global.socket = socket()
