import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordianComponent } from './components/accordian/accordian.component';
import { DrawingToolComponent } from './components/drawing-tool/drawing-tool.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { SpeechTextComponent } from './speech-text/speech-text.component';
import { SliderComponent } from './slider/slider.component';
import { CssDesignsComponent } from './css-designs/css-designs.component';
import { ModalComponent } from './modal/modal.component';
import { ToastComponent } from './toast/toast.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CssCountersComponent } from './css-counters/css-counters.component';
import { ChartsComponent } from './charts/charts.component';
import { CssGridComponent } from './css-grid/css-grid.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accordian',
      },
      {
        path: 'accordian',
        component: AccordianComponent,
      },
      {
        path: 'drawing-tool',
        component: DrawingToolComponent,
      },
      {
        path: 'org-chart',
        component: OrgChartComponent,
      },
      {
        path: 'vertical-timeline',
        component: VerticalTimelineComponent,
      },
      {
        path: 'speech-text',
        component: SpeechTextComponent,
      },
      {
        path: 'slider',
        component: SliderComponent,
      },
      {
        path: 'css-designs',
        component: CssDesignsComponent,
      },
      {
        path: 'modal',
        component: ModalComponent,
      },
      {
        path: 'toast',
        component: ToastComponent,
      },
      {
        path: 'carousel',
        component: CarouselComponent,
      },
      {
        path: 'counter',
        component: CssCountersComponent,
      },
      {
        path: 'charts',
        component: ChartsComponent,
      },
      {
        path: 'grid-layout',
        component: CssGridComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetsRoutingModule {}
