import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUrlConstant } from '../constants/AppUrlConstant';
import { Observable } from 'rxjs';
import { Post, PostPayload } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + AppUrlConstant.POSTS);
  }

  createPost(payload: PostPayload): Observable<Post> {
    return this.http.post<Post>(this.baseUrl + AppUrlConstant.POSTS, payload);
  }
}
