import axios from './instance';
const CART_ENDPOINT: string = '/cart';

export const getCart = () => {
    return axios.get(`${CART_ENDPOINT}/get`);
}

export const addToCart = (eventId: number) => {
    return axios.post(`${CART_ENDPOINT}/add/${eventId}`);
}