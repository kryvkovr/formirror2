import { createSelector } from 'reselect';

export const getPostsSelector = state => state.postsReducer.posts;


const getSelectedPosts = (posts, selectedIds) => {
    return posts.filter(post => selectedIds.indexOf(post.id) > -1)
}

export const getSelectedPostsSelector = createSelector(
    state => state.postsReducer.posts,
    state => state.selectedPostsReducer.selectedPostsIds,
    getSelectedPosts,
);


