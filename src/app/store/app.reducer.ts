import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import {
  State as PostState,
  reducer,
} from '../components/store/reducers/post.reducer';

// export interface FeatureState {
//   list: PostState;
// }

// export interface State {
//   feature: FeatureState;
// }

// export const reducers: ActionReducerMap<FeatureState> = {
//   list: reducer
// };

// export const selectFeature = (state: State) => state.feature;

// export const selectList = createSelector(
//   selectFeature,
//   (state: FeatureState) => state.list
// );

export interface State {
  list: PostState;
}

export const reducers: ActionReducerMap<State> = {
  list: reducer
};


export const selectPost = createFeatureSelector<PostState>('list');

export const selectList = createSelector(selectPost, (state: PostState) => state.posts);
