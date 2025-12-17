import axios from 'axios';
// Gateway URL
const LOCALHOST = 'http://localhost:5000'

export const API_BASE_URL = LOCALHOST

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});
