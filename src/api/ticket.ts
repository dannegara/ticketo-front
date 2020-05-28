import axios from './instance';
import { IBuyTicket } from './types';

const TICKET_DEFAULT_PATH: string = "/ticket";

export const buyTicket = (body: IBuyTicket) => {
    return axios.post(`${TICKET_DEFAULT_PATH}/buy_ticket`, body);
}