import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
})
export class TooltipComponent {
  ngAfterViewInit() {
    const tooltips = Array.from(document.getElementsByClassName('tooltip2'));

    tooltips.forEach((el) => {
      const content = el.getAttribute('data-content');
      (el as any).style.setProperty('--tooltip-content', `"${content}"`);
    });
  }
}
