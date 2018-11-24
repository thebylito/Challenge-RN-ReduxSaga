import { combineReducers } from 'redux';

import books from './books';
import featuredBooks from './featuredBooks';

export default combineReducers({
  books,
  featuredBooks,
});
