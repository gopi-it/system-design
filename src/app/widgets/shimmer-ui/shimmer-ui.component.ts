import { Component, OnInit, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-shimmer-ui',
  templateUrl: './shimmer-ui.component.html',
  styleUrl: './shimmer-ui.component.scss',
})
export class ShimmerUiComponent implements OnInit {
  public showShimmer = signal(true);

  ngOnInit() {
    this.displayShimmer();
  }

  displayShimmer() {
    this.showShimmer.set(true);
    setTimeout(() => {
      this.showShimmer.set(false);
    }, 4000);
  }
}
