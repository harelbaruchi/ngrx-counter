import { createReducer, on } from '@ngrx/store';
import { addPost } from './posts.actions';
import { initialState } from './posts.state';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  })
);

export function postsReducer(state: any, action: any) {
  return _postReducer(state, action);
}
