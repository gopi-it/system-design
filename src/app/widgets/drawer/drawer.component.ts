import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  public showDrawer = signal(false);

  toggleDrawer() {
    this.showDrawer.update((status) => !status);
  }
}
