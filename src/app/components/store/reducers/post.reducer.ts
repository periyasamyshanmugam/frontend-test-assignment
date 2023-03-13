import {
  Action,
  createReducer,
  on,
} from '@ngrx/store';
import { Post } from '../../../models/post.model';
import * as PostActions from '../actions/post.actions';

export interface State {
  posts: Post[];
  searchString: null;
  filteredPosts: [];
}

const initialState: State = {
  posts: [],
  searchString: null,
  filteredPosts: [],
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

