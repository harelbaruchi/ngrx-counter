import { Post } from 'src/app/models/posts.model';

export interface PostsStates {
  posts: Post[];
}

export const initialState: PostsStates = {
  posts: [
    { id: '1', title: 'sample Title 1', description: 'sample Description 1' },
    { id: '2', title: 'sample Title 2', description: 'sample Description 2' },
  ],
};
