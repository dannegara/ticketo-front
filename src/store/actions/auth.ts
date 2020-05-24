export const CHECK_TOKEN = 'CHECK_TOKEN';

export const checkToken = () => {
    return {
        type: CHECK_TOKEN,
        payload: {
            profile: {},
            isAuth: true
        }
    }
}