import axios from './instance';
const EVENTS_ENDPOINT: string = '/events';

export const getEvents = () => {
    return axios.get(`${EVENTS_ENDPOINT}/getEvents`);
}

export const getEvent = (eventId: number) => {
    return axios.get(`${EVENTS_ENDPOINT}/getEvent/${eventId}`);
}

export const addEvent = (body: FormData) => {
    return axios.post(`${EVENTS_ENDPOINT}/addEvent`, body);
}