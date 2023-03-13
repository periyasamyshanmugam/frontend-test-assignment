import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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

  // Get data
  getData = () => this.store.select(getPostById(this.id));

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.State>
  ) { }

  ngOnInit() {
    // Getting id from url params
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}
