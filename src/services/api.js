import { create } from 'apisauce';

const api = create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

export default api;
