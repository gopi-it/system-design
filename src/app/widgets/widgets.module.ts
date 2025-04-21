import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { DrawingToolComponent } from './components/drawing-tool/drawing-tool.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { SpeechTextComponent } from './speech-text/speech-text.component';
import { SliderComponent } from './slider/slider.component';
import { CssDesignsComponent } from './css-designs/css-designs.component';
import { ModalComponent } from './modal/modal.component';
import { ToastComponent } from './toast/toast.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SwitchComponent } from './css-designs/switch/switch.component';
import { CssCountersComponent } from './css-counters/css-counters.component';
import { ChartsComponent } from './charts/charts.component';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import { CssGridComponent } from './css-grid/css-grid.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    WidgetsComponent,
    DrawingToolComponent,
    AccordianComponent,
    OrgChartComponent,
    VerticalTimelineComponent,
    SpeechTextComponent,
    SliderComponent,
    CssDesignsComponent,
    ModalComponent,
    ToastComponent,
    CarouselComponent,
    SwitchComponent,
    CssCountersComponent,
    ChartsComponent,
    DonutChartComponent,
    CssGridComponent,
    DragDropComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsRoutingModule,
  ],
})
export class WidgetsModule {}
