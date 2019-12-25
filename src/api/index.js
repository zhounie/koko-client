import { GET, POST} from '../config/request'

export const login = (params) => POST('/user/login', params)