import { Component } from '@angular/core';
import { WIDGETS_MENU } from '../../config/routes.config';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss',
})
export class WidgetsComponent {
  public widgets = WIDGETS_MENU;
}
