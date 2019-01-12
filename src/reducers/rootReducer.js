import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import selectedPostsReducer from './selectedPostsReducer';

export default combineReducers({
    postsReducer,
    selectedPostsReducer
});