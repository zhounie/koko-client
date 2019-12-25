import { TITLE, ACTIVE, RECEIVE } from './types'
import initState from './state'

export default (state = initState, action) => {
    switch (action.type) {
        case TITLE:
            return Object.assign({}, state, {
                title: action.data.title
            })
        case ACTIVE:
            return Object.assign({}, state, {
                active: action.data.active
            })
        case RECEIVE:
            let receiveMsg = JSON.parse(JSON.stringify(state.receiveMsg))
            let isExist = receiveMsg.find(item => {
                return item.id === action.data.receiveMsg.id
            })
            if (isExist) {
                isExist.message.push(action.data.receiveMsg.message)
                return Object.assign({}, state, {
                    receiveMsg: receiveMsg
                })
            }
            if (!Array.isArray(action.data.receiveMsg.message)) {
                action.data.receiveMsg.message = action.data.receiveMsg.message.split(' ')
            }
            return Object.assign({}, state, {
                receiveMsg: receiveMsg.push(action.data.receiveMsg)
            })
        default:
            return state
    }
}

