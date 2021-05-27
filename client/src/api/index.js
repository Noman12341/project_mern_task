import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const search = (phrase) => API.get(`/search/phrase/${phrase}`);