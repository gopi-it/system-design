import { Injectable } from '@angular/core';
import { CursorInfo, Items } from '../models/virtual-scroll.model';
import { Observable, of } from 'rxjs';
import { getItem } from '../utils/data.util';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  public total = 100;
  public size = 10;

  public items: Items[] = [];

  constructor() {
    this.setItems();
  }

  public setItems(): void {
    for (var i = 0; i < 100; i++) {
      this.items.push(getItem(i));
    }
  }

  public load(start: number, limit: number): CursorInfo {
    const chunk = this.items.slice(start, start + limit);

    return {
      chunk,
      nextCursor: start + limit,
      prevCursor: start,
      size: chunk.length,
    };
  }
}
