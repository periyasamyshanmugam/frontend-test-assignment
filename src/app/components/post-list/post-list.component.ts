import { Post } from './../../models/post.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectList } from 'src/app/store/app.reducer';
import { GetList } from '../store/actions/post.actions';
import { State } from '../store/reducers/post.reducer';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
})
export class PostListComponent implements OnInit {
  postList: Observable<Post[]>;

  constructor(public store: Store<State>) {
    this.postList = store.pipe(select(selectList));
  }

  ngOnInit() {
    this.store.dispatch(GetList());
  }
}
