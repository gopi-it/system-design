import {
  Component,
  computed,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-slider-carousel',
  templateUrl: './slider-carousel.component.html',
  styleUrl: './slider-carousel.component.scss',
})
export class SliderCarouselComponent {
  public totalItems = 3;
  public activeItem = signal(0);

  public sliderEl = viewChild<ElementRef>('slider');

  public position = computed(() => {
    let value = this.activeItem() * this.totalItems * 100;
    if (value > 0) {
      value *= -1;
    }
    return `translateX(${value}px)`;
  });

  previous() {
    this.activeItem.update((val) => {
      return val === 0 ? this.totalItems - 1 : val - 1;
    });
  }

  next() {
    this.activeItem.update((val) => {
      return val === this.totalItems - 1 ? 0 : val + 1;
    });
  }
}
