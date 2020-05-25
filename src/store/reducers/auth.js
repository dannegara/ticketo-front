import {
    CHECK_TOKEN,
    LOGIN,
    LOGOUT
} from '../actions/auth';

const initialState = {
    isAuth: false,
    profile: {}
}
export default (state = initialState, { type, payload }) => {
    switch(type) {
        case CHECK_TOKEN: 
            return {
                ...state,
                profile: payload.profile,
                isAuth: payload.isAuth
            }
        case LOGIN:
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                profile: {}
            }
        default: 
            return state;
    }
}