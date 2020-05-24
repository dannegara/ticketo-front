import axios from 'axios';
import { API_URL } from '../helpers/constants';

const USER_TOKEN = localStorage.getItem('token') || ''

export default axios.create({
    baseURL: API_URL,
    headers: {
        'api-token': USER_TOKEN
    }
});