import { Post, PostPayload } from './../../models/post.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import { CreatePost } from './../store/actions/post.actions';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass'],
})
export class CreatePostComponent implements OnInit {
  public createPostForm: FormGroup;

  get titleControl() {
    return this.createPostForm.get('title') as FormControl;
  }

  get bodyControl() {
    return this.createPostForm.get('body') as FormControl;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.State>
  ) {}

  ngOnInit() {
    this.initForm();
  }

  /**
   * Method will be used to create form group.
   */
  initForm() {
    this.createPostForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
    });
  }

  /**
   * Method will be called on form submit.
   */
  onSubmit() {
    const data = this.createPostForm.value;
    const post: PostPayload = {
      userId: 1,
      title: data.title,
      body: data.body,
    };
    this.store.dispatch(CreatePost({ post }));
  }

  /**
   * Method will be called on click of cancel button.
   */
  onCancel() {
    this.routeToPosts();
  }

  /**
   * Method will route to posts page.
   */
  routeToPosts() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
