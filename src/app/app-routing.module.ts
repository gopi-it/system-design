import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'infinite-scroll',
  },
  {
    path: 'infinite-scroll',
    pathMatch: 'full',
    loadChildren: () =>
      import('./carousel/carousel.module').then((m) => m.CarouselModule),
  },
  {
    path: 'tooltip',
    loadChildren: () =>
      import('./tooltip/tooltip.module').then((m) => m.TooltipModule),
  },
  {
    path: 'typeahead',
    loadChildren: () =>
      import('./autocomplete/autocomplete.module').then(
        (m) => m.AutocompleteModule
      ),
  },
  {
    path: 'theming',
    loadChildren: () =>
      import('./theming/theming.module').then((m) => m.ThemingModule),
  },
  {
    path: 'typing',
    loadChildren: () =>
      import('./typing/typing.module').then((m) => m.TypingModule),
  },
  {
    path: 'wysiwyg',
    loadChildren: () =>
      import('./wysiwyg/wysiwyg.module').then((m) => m.WysiwygModule),
  },
  {
    path: 'infinte-scroll',
    loadChildren: () =>
      import('./infinite-scroll/infinite-scroll.module').then(
        (m) => m.InfiniteScrollModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
