import { createSelector } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import { State as PostState } from '../reducers/post.reducer';

export const selectAll = (state: fromApp.State) => state.list;
export const getPostById = (id: number) => {
  return createSelector(selectAll, (posts: PostState) => {
    return posts.posts.length > 0 ? posts.posts.find((post) => post.id == id) : null;
  });
};
