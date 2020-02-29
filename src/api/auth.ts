import axios from './instance';
import { ILogin } from './types';

export const login = (login: ILogin) => {
    return axios.post('/auth/login', login);
}