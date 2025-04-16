import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrl: './vertical-timeline.component.scss',
})
export class VerticalTimelineComponent {
  public show = false;
  private throttle = false;

  public arrList = Array(15).fill('');

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    this.setAnimation();
  }

  ngOnInit() {
    this.setAnimation();
  }

  setAnimation(): void {
    if (this.throttle) return;

    this.throttle = true;

    setTimeout(() => {
      const el = document.getElementsByTagName('li');
      Array.from(el).forEach((element) => {
        const isVisible = this.isElementInViewport(element);
        if (isVisible) {
          element
            .querySelector('.timeline__content')
            ?.classList.add('timeline__content--visible');
        }
      });
      this.throttle = false;
    }, 100);
  }

  isElementInViewport(el: any): boolean {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
