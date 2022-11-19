import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsStates } from './posts.state';

const getPostsState = createFeatureSelector<PostsStates>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});
