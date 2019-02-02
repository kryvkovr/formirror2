import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import postsReducer from './postsReducer';
import selectedPostsReducer from './selectedPostsReducer';


export default history => combineReducers({
  router: connectRouter(history),
  postsReducer,
  selectedPostsReducer,
});
