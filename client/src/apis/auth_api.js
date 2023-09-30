// api.js

import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Replace with your API endpoint

const api = axios.create({
  baseURL,
});

export const signup = (userData) => api.post('/api/signup', userData);
export const signin = (userData) => api.post('/api/signin', userData);

export default api;
