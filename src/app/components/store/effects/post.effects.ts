import { Post } from '../../../models/post.model';
import { PostsService } from '../../../service/posts.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import * as PostActions from '../actions/post.actions';
import * as fromApp from '../../../store/app.reducer';
import { GetList, GetListSuccess, GetListFail, CreatePost, GetFilteredPostList } from '../actions/post.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class PostEffects {

  public fetchPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetList),
      exhaustMap(() =>
        this._postsService.getAllPosts().pipe(
          map((items) => GetListSuccess(items)),
          catchError((error) => of(GetListFail(error)))
        )
      )
    );
  });

  public createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreatePost),
      concatMap((action) => this._postsService.createPost(action.post)),
      tap(() => this.router.navigateByUrl('/post-list'))
    ),
    { dispatch: false }
  );

  public filterPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetFilteredPostList),
      exhaustMap((action) =>
        this._postsService.postsFilter(action.searchString).pipe(
          map((items) => GetListSuccess(items)),
          catchError((error) => of(GetListFail(error)))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.State>,
    private _postsService: PostsService,
    private router: Router
  ) { }
}
