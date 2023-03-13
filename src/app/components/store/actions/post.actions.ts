import { createAction, props } from '@ngrx/store';

import { Post, PostPayload } from '../../../models/post.model';

export const GetList = createAction('[Post] Get List');
export const GetListSuccess = createAction(
  '[Post] Get List Success',
  (payload: Post[]) => ({ payload })
);
export const GetListFail = createAction(
  '[Post] Get List Fail',
  (payload: string) => ({ payload })
);

export const CreatePost = createAction(
  '[Create a Post] Create Post',
  props<{ post: PostPayload }>()
);

export const GetFilteredPostList = createAction(
  '[Posts] get all filtered posts',
  props<{searchString: string}>()
)
