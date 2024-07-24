import axios from 'axios';

const BASE_URL = 'https://maps.googleapis.com';
const config = {
  api: {
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
};

export const api = axios.create({...config.api});
