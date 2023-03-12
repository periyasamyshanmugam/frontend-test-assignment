import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';

import * as fromApp from '../../../store/app.reducer';
import { getPostById } from '../../store/selectors/post.selector';
import { Post } from './../../../models/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.sass'],
})
export class PostDetailsComponent implements OnInit {
  post: Observable<Post | null | undefined>;
  id: number;

  getData = () => this.store.select(getPostById(this.id));

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.State>
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  // getData() {
  //   return this.store.select(getPostById(this.id));
  // }
}
