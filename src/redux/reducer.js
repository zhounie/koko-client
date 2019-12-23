import { TITLE, ACTIVE } from './types'
import initState from './state'

const changeTitle = (state = '', action = {}) => {
    if (action.type === TITLE) {
        return action.data
    }
    return state
}
const changeActive = (state = '', action = {}) => {
    if (action.type === ACTIVE) {
        return action.data
    }
    return state
}

// export const finalReducer = combineReducers({
//     changeTitle, changeActive
// })

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
        default:
            return state
    }
}

