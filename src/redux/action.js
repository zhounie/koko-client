import { TITLE, ACTIVE } from './types'

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