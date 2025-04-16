import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  private slideNo = 1;
  private maxSlideNo = 3;

  private current = 1;

  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('slide') slide!: ElementRef;

  get slideWidth() {
    return this.slide.nativeElement.clientWidth;
  }

  next() {
    if (this.slideNo === this.maxSlideNo) {
      this.slideNo = 1;
      this.slider.nativeElement.scrollLeft = 0;
      return;
    }

    this.slideNo++;
    this.slider.nativeElement.scrollLeft += this.slideWidth;
  }

  previous() {
    if (this.slideNo === 1) {
      this.slideNo = this.maxSlideNo;
      this.slider.nativeElement.scrollLeft = this.slideWidth * this.maxSlideNo;
      return;
    }

    this.slideNo--;
    this.slider.nativeElement.scrollLeft -= this.slideWidth;
  }

  nextBtnClicked() {
    if (this.current === this.maxSlideNo) {
      this.current = 1;
      return;
    }
    this.current += 1;
  }

  prevBtnClicked() {
    if (this.current === 1) {
      this.current = this.maxSlideNo;
      return;
    }
    this.current -= 1;
  }

  setCurrentCls(id: number) {
    return id === this.current;
  }

  setPrevCls(id: number) {
    if (this.current === 1) {
      return id === 3;
    }
    return id === this.current - 1;
  }

  setNextCls(id: number) {
    if (this.current === 3) {
      return id === 1;
    }
    return id === this.current + 1;
  }
}
