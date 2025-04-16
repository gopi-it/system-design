import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { Items } from '../models/virtual-scroll.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  @Input() item!: Items;
  public sortId = 0;

  @HostBinding('style.transform') transform!: string;
  @HostBinding('attr.data-translateY') dataTranslate!: string;

  public translateY = 0;

  constructor(public elRef: ElementRef) {}

  ngOnChanges() {
    this.setTranslateY(this.item.tansformY);
  }

  public setTranslateY(translateY: number) {
    this.translateY = translateY;
    this.transform = `translateY(${translateY}px)`;
    this.dataTranslate = `${translateY}`;
  }
}
