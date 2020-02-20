import axios from 'axios';
import { API_URL } from '../helpers/constants';

const instance = axios.create({ API_URL, withCredentials: true });

export const login = () => instance.post('/login');