import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TooltipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TooltipRoutingModule {}
