import { create } from 'apisauce';

const api = create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

api.addRequestTransform((request) => {
  request.params['key'] = 'AIzaSyBN_6U1pYN0VzKaxQdYyqnJEUWdLG-5FpM';
});

export default api;
