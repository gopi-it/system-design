import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  animate = false;
  ngOnInit() {
    setTimeout(() => {
      this.animate = true;
    }, 1000);
  }
}
