import { Component, HostListener } from '@angular/core';
import { throttle } from '../../utils/common.utils';

interface Element {
  id: number;
  value: string;
}

interface PageResult {
  elements: Element[];
  total: number;
  skip: number;
  load: number;
}

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss',
})
export class InfiniteScrollComponent {
  public elements: Element[] = [];
  public total = 0;
  public load = 30;
  public loading = false;

  @HostListener('window:scroll', ['$event']) scrollEvent(event: Event) {
    // innerHeight - window visible height
    // scrollY - vertical scroll position
    // offsetHeight - height of the element
    const endOfPage =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (endOfPage && this.elements.length < this.total) {
      this.loading = true;
      throttle(() => {
        this.loadElements();
        this.loading = false;
      });
    }
  }

  public get loadedPercent(): string {
    return `${(this.elements.length / this.total) * 100}%`;
  }

  ngOnInit() {
    this.loadElements();
  }

  private loadElements(): void {
    const result = this.getElements(this.elements.length, this.load);
    this.elements.push(...result.elements);
    this.total = result.total;
  }

  private getElements(skip: number, load: number): PageResult {
    const total = 90;
    let elements: Element[] = [];

    const allResults: Element[] = [];
    for (var i = 0; i < total; i++) {
      const index = i + 1;
      allResults.push({
        id: index,
        value: `Element ${index}`,
      });
    }

    elements = allResults.slice(skip, load + skip);

    return {
      elements,
      total,
      skip,
      load,
    };
  }
}
