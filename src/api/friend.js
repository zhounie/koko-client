import { GET, POST} from '../config/request'


export const findFriend = (params) => POST('/user/findFriend', params)
export const addFriend = (params) => POST('/user/addFriend', params)
export const friendRequest = (params) => POST('/user/friendRequest', params)
export const friendList = (params) => POST('/user/friendList', params)