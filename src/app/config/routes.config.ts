export interface MenuRoutes {
  path: string;
  label: string;
  submenu?: MenuRoutes[];
}
export const WIDGETS_MENU: MenuRoutes[] = [
  {
    label: 'Accordian',
    path: 'accordian',
  },
  {
    label: 'Drawing Tool',
    path: 'drawing-tool',
  },
  {
    label: 'Org Chart',
    path: 'org-chart',
  },
  {
    label: 'Verical Timeline',
    path: 'vertical-timeline',
  },
  {
    label: 'Speech & Text',
    path: 'speech-text',
  },
  {
    label: 'Slider',
    path: 'slider',
  },
  {
    label: 'CSS Designs',
    path: 'css-designs',
  },
  {
    label: 'Modal',
    path: 'modal',
  },
  {
    label: 'Toast',
    path: 'toast',
  },
  {
    label: 'Carousel',
    path: 'carousel',
  },
  {
    label: 'CSS Counter',
    path: 'counter',
  },
  {
    label: 'Charts',
    path: 'charts',
  },
  {
    label: 'Grid layout',
    path: 'grid-layout',
  },
].map((menu) => ({
  ...menu,
  path: `/widgets/${menu.path}`,
}));
export const ALL_ROUTES: MenuRoutes[] = [
  {
    label: 'Widgets',
    path: '/widgets',
    submenu: WIDGETS_MENU,
  },
  {
    label: 'CSS - Infinite Scroll',
    path: '/infinite-scroll',
  },
  {
    label: 'Tooltip',
    path: '/tooltip',
  },
  {
    label: 'Typeahead',
    path: '/typeahead',
  },
  {
    label: 'Theming',
    path: '/theming',
  },
  {
    label: 'Typing',
    path: '/typing',
  },
  {
    label: 'WYSIWYG Editor',
    path: '/wysiwyg',
  },
  {
    label: 'Infinte Scroll',
    path: '/infinte-scroll',
  },
  {
    label: 'Virtual Scroll',
    path: '/virtual-scroll',
  },
  {
    label: 'Chat',
    path: '/chat',
  },
  {
    label: 'Tree View',
    path: '/tree-view',
  },
];
