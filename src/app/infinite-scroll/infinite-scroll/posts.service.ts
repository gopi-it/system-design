import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { PostDetail } from './posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public allPosts: PostDetail[] = [];
  public postsCount = 20;

  public dataFetched$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  public loadPosts(): void {
    this.http
      .get<PostDetail[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.allPosts = data;
        this.dataFetched$.next(true);
      });
  }

  public getPosts(skipCount: number): PostDetail[] {
    const endCount = skipCount + this.postsCount;
    const posts = this.allPosts.slice(skipCount, endCount);
    console.log('Data::', skipCount, endCount, posts);

    return posts;
  }
}
