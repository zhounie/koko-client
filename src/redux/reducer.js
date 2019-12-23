import { TITLE, ACTIVE } from './types'
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
        default:
            return state
    }
}

