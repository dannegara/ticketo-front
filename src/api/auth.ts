import axios from './instance';
import { ILogin, IRegister } from './types';

const AUTH_DEFAULT_PATH = "/auth";

export const login = (login: ILogin) => {
    return axios.post(`${AUTH_DEFAULT_PATH}/login`, login);
}
export const register = (register: IRegister) => {
    return axios.post(`${AUTH_DEFAULT_PATH}/register`, register);
}
export const checkToken = () => {
    return axios.get(`${AUTH_DEFAULT_PATH}/getUserData`);
}