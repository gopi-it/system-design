import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemingComponent } from './theming/theming.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ThemingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemingRoutingModule {}
