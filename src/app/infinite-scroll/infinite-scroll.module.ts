import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { InfiniteScrollRoutingModule } from './infinite-scroll-routing.module';

@NgModule({
  declarations: [InfiniteScrollComponent],
  imports: [CommonModule, InfiniteScrollRoutingModule],
})
export class InfiniteScrollModule {}
