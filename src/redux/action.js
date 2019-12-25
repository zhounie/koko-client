import { TITLE, ACTIVE, RECEIVE } from './types'

export const changeTitle = (title) => {
    return {
        type: TITLE,
        data: title
    }
}

export const changeActive = (active) => {
    return {
        type: ACTIVE,
        data: active
    }
}

// {
//     id: 1,
//     message: '六六六'
// }
export const setReceiveMsg = (receiveMsg) => {
    return {
        type: RECEIVE,
        data: receiveMsg
    }
}