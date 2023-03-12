import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Post } from '../../../models/post.model';
import * as PostActions from '../actions/post.actions';

export interface State {
  posts: Post[];
}

const initialState: State = {
  posts: [],
};

const postReducer = createReducer(
  initialState,
  on(PostActions.GetListSuccess, (state, action) => ({
    ...state,
    posts: [...action.payload],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return postReducer(state, action);
}

