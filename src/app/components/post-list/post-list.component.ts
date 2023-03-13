import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';

import { selectList } from 'src/app/store/app.reducer';
import { GetFilteredPostList, GetList } from '../store/actions/post.actions';
import { State } from '../store/reducers/post.reducer';
import { Post } from './../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
})
export class PostListComponent implements OnInit {
  postList: Observable<Post[]>;
  filter: FormControl = new FormControl();

  constructor(public store: Store<State>) {
    this.postList = store.pipe(select(selectList));
  }

  ngOnInit() {
    this.store.dispatch(GetList());

    this.filter.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      // no need to unsubscribe because subscribing to self
      .subscribe((searchString: string) => this.store.dispatch(GetFilteredPostList({ searchString })));
  }
}
