import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import {
  State as PostState,
  reducer,
} from '../components/store/reducers/post.reducer';

export interface State {
  list: PostState;
}

export const reducers: ActionReducerMap<State> = {
  list: reducer
};


export const selectPost = createFeatureSelector<PostState>('list');

export const selectList = createSelector(selectPost, (state: PostState) => state.posts);
