import { createSelector } from 'reselect';
import { getPostIdFromUrl } from './navigationSelector';

export const getPosts = state => state.postsReducer.posts;

export const getSelectedPosts = createSelector(
  state => state.postsReducer.posts,
  state => state.selectedPostsReducer.selectedPostsIds,
  (posts, selectedIds) => posts.filter(post => selectedIds.indexOf(post.id) > -1),
);

export const getPostFromUrl = createSelector(
  getPosts,
  getPostIdFromUrl,
  (posts, postId) => posts.filter(post => post.id == postId)[0],
);