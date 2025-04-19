import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { PostDetail } from './posts.model';
import { PostsService } from './posts.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss',
})
export class InfiniteScrollComponent {
  public skipCount = 0;
  public loading = signal(false);

  public posts: PostDetail[] = [];

  public lastRow = viewChild.required<ElementRef>('lastRow');

  constructor(private postsService: PostsService) {}

  public loadData(): void {
    this.skipCount =
      this.posts.length === 0
        ? 0
        : this.skipCount + this.postsService.postsCount;

    this.loading.set(true);
    this.postsService.dataFetched$
      .pipe(filter((status) => status))
      .subscribe(() => {
        this.loading.set(false);
        const posts = this.postsService.getPosts(this.skipCount);
        this.posts.push(...posts);
      });
  }
  public reload(): void {
    window.location.reload();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadData();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(this.lastRow().nativeElement);
  }
}
