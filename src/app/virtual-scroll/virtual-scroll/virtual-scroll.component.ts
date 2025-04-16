import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Query,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { CursorInfo, Items } from '../models/virtual-scroll.model';
import { DbService } from '../services/db.service';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrl: './virtual-scroll.component.scss',
})
export class VirtualScrollComponent {
  public start = 0;
  public end = 0;

  public listSize = 10;
  public pageSize = this.listSize * 2;
  public margin = 20;

  @ViewChild('pageTopEl') pageTopEl!: ElementRef;
  @ViewChild('pageBottomEl') pageBottomEl!: ElementRef;
  @ViewChildren('listElements') listElements!: QueryList<ItemsComponent>;
  public elementsPool: ItemsComponent[] = [];

  public items: Items[] = [];

  constructor(private dbService: DbService) {}

  private loadData(skip: number, size: number): CursorInfo {
    return this.dbService.load(skip, size);
  }

  ngAfterViewInit() {
    this.setTopObserver();
    this.setBottomObserver();
  }

  private setTopObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Top observer');
            if (this.start > 0) {
              const data = this.loadData(
                this.start - this.listSize,
                this.listSize
              );

              console.log(
                'data::end',
                this.start - this.listSize,
                this.listSize,
                data
              );

              // if (data.size) {
              //   this.start -= data.size;
              //   this.end -= data.size;
              //   this.recycle('TOP', data.chunk);

              //   const firstElementTranslateY = this.elementsPool[0].translateY;
              //   this.pageTopEl.nativeElement.style.transform = `translateY(${firstElementTranslateY}px)`;

              //   const lastElementTranslateY =
              //     this.elementsPool[this.elementsPool.length - 1].translateY;
              //   this.pageBottomEl.nativeElement.style.transform = `translateY(${lastElementTranslateY}px)`;
              // }
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(this.pageTopEl.nativeElement);
  }

  private setBottomObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const count = this.end - this.start;

            const data = this.loadData(this.end, this.listSize);
            console.log('data::start', count, this.listSize, data);

            if (count < this.pageSize) {
              this.items.push(...data.chunk);
              this.end += data.size;
              this.initElementPool();
            } else if (count === this.pageSize) {
              if (data.size) {
                this.end += data.size;
                this.start += data.size;
                this.recycle('DOWN', data.chunk);
              }
            }

            const firstElementTranslateY = this.elementsPool[0].translateY;
            this.pageTopEl.nativeElement.style.transform = `translateY(${firstElementTranslateY}px)`;

            const lastElementTranslateY =
              this.elementsPool[this.elementsPool.length - 1].translateY;
            this.pageBottomEl.nativeElement.style.transform = `translateY(${lastElementTranslateY}px)`;
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(this.pageBottomEl.nativeElement);
  }

  recycle(direction: string, items: Items[]) {
    if (direction === 'DOWN') {
      const lastItem = this.elementsPool[this.elementsPool.length - 1];
      let lastElement = lastItem.elRef.nativeElement;

      let lastElementY =
        lastItem.translateY +
        lastElement.getBoundingClientRect().height +
        this.margin;

      for (let i = 0; i < this.listSize; i++) {
        const newVal = items[i];
        const item = this.elementsPool[i];
        item.setTranslateY(lastElementY);

        item.item.description = newVal.description;
        item.item.name = newVal.name;
        item.item.url = newVal.url;
        item.sortId = this.start + this.end + i;

        if (i !== this.listSize - 1) {
          lastElementY =
            lastElementY +
            item.elRef.nativeElement.getBoundingClientRect().height +
            this.margin;
        }
      }

      this.pageBottomEl.nativeElement.style.transform = `translateY(${lastElementY}px)`;

      console.log('elements pool::', this.elementsPool);
    } else {
      console.log('elements pool::', this.elementsPool);

      const firstItem = this.elementsPool[0];
      let firstElement = firstItem.elRef.nativeElement;
      let firstElementY =
        firstElement.translateY +
        firstElement.getBoundingClientRect().height +
        this.margin;
      console.log(items);
      // for (let i = this.elementsPool.length - 1; i >= this.listSize; i--) {
      //   console.log(i - this.listSize);
      //   const newVal = items[i - this.listSize];
      //   const item = this.elementsPool[i];
      //   console.log('hello::', item, newVal);
      // }
    }

    this.elementsPool = this.elementsPool.sort((a, b) => {
      return a.sortId - b.sortId;
    });
  }

  initElementPool() {
    let translateY = 0;

    setTimeout(() => {
      this.elementsPool = [];
      this.listElements.forEach((item) => {
        this.elementsPool.push(item);
      });

      this.listElements.forEach((item, i) => {
        const id = item.item.id;
        if (id > 0) {
          const prevItemId = id - 1;
          const prevItem = this.listElements.get(prevItemId);

          const previousElHeight =
            prevItem?.elRef.nativeElement.getBoundingClientRect().height;
          const previousElTranslateY = prevItem?.translateY;

          translateY = previousElHeight + previousElTranslateY + this.margin;
          item.setTranslateY(translateY);
          item.sortId = i;
        }
      });

      this.pageBottomEl.nativeElement.style.transform = `translateY(${translateY}px)`;
    }, 0);
  }
}
