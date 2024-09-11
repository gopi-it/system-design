import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypingComponent } from './typing/typing.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TypingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypingRoutingModule {}
