import { Component } from '@angular/core';
import { ALL_ROUTES } from './config/routes.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public menuItems = ALL_ROUTES;
}
