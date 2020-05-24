export const CHECK_TOKEN = 'CHECK_TOKEN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export const checkToken = () => {
    return {
        type: CHECK_TOKEN,
        payload: {
            profile: {},
            isAuth: true
        }
    }
}

export const login = () => {
    return {
        type: LOGIN
    }
}

export const register = () => {
    return {
        type: REGISTER
    }
}

export const logout = () => ({ type: LOGOUT });