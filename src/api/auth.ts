import axios from './instance';
import { ILogin, IRegister } from './types';

export const login = (login: ILogin) => {
    return axios.post('/auth/login', login);
}
export const register = (register: IRegister) => {
    console.log(register);
}