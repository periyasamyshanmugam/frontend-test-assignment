import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import { CreatePost } from './../store/actions/post.actions';
import { PostPayload } from './../../models/post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass'],
})
export class CreatePostComponent implements OnInit {
  public createPostForm: FormGroup;

  // To get title form field control
  get titleControl() {
    return this.createPostForm.get('title') as FormControl;
  }

  // To get body form field control
  get bodyControl() {
    return this.createPostForm.get('body') as FormControl;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.State>
  ) { }

  ngOnInit() {
    // Initiating form.
    this.initForm();
  }

  /**
   * Method will be used to create form group.
   */
  initForm() {
    this.createPostForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.pattern(/^x/)]),
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
