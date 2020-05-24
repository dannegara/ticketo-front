import {
    CHECK_TOKEN
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
        default: 
            return state;
    }
}