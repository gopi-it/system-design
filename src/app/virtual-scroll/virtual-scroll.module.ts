import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    VirtualScrollComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    VirtualScrollRoutingModule
  ]
})
export class VirtualScrollModule { }
