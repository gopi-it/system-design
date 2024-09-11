import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WysisygComponent } from './wysisyg/wysisyg.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WysisygComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WysiwygRoutingModule {}
