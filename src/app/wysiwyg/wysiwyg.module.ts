import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WysiwygRoutingModule } from './wysiwyg-routing.module';
import { WysisygComponent } from './wysisyg/wysisyg.component';


@NgModule({
  declarations: [
    WysisygComponent
  ],
  imports: [
    CommonModule,
    WysiwygRoutingModule
  ]
})
export class WysiwygModule { }
