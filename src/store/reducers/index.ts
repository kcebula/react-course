import { combineReducers } from 'redux';

import postsReducer from './posts.reducer';
import usersReducer from './users.reducer';

export const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer
});
