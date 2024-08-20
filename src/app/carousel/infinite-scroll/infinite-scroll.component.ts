import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss',
})
export class InfiniteScrollComponent implements AfterViewInit {
  @ViewChild('inner', { read: ElementRef, static: true })
  scrollInner!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const scrollItems = Array.from(this.scrollInner.nativeElement.children);

    scrollItems.forEach((item: any) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      this.renderer.appendChild(this.scrollInner.nativeElement, duplicatedItem);
    });
  }
}
