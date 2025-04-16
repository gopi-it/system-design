import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'widgets',
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
  {
    path: 'widgets',
    loadChildren: () =>
      import('./widgets/widgets.module').then((m) => m.WidgetsModule),
  },
  {
    path: 'virtual-scroll',
    loadChildren: () =>
      import('./virtual-scroll/virtual-scroll.module').then(
        (m) => m.VirtualScrollModule
      ),
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: 'tree-view',
    loadChildren: () =>
      import('./tree-view/tree-view.module').then((c) => c.TreeViewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
