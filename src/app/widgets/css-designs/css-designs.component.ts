import { Component } from '@angular/core';

@Component({
  selector: 'app-css-designs',
  templateUrl: './css-designs.component.html',
  styleUrl: './css-designs.component.scss',
})
export class CssDesignsComponent {
  ngOnInit() {
    setInterval(() => {
      const wrapper = document.querySelector('.words') as any;
      const elements = Array.from(document.querySelectorAll('.words span'));
      let current = 0;
      elements.forEach((el, index) => {
        if (el.classList.contains('current')) {
          current = index;
        }
      });
      elements[current].classList.remove('current');
      let next = current + 1;
      if (current === elements.length - 1) {
        next = 0;
      }
      elements[next].classList.remove('next');
      current++;
      if (current === elements.length) {
        current = 0;
      }
      elements[current].classList.add('current');

      next++;
      if (next === elements.length) {
        next = 0;
      }
      elements[next].classList.add('next');

      wrapper.style.setProperty(
        '--color',
        elements[next].getAttribute('data-color')
      );
      wrapper.style.setProperty(
        '--color-bg',
        elements[next].getAttribute('data-bg-color')
      );
      wrapper.style.setProperty(
        '--width',
        `${(elements[next] as any).offsetWidth}px`
      );
    }, 1500);
  }
}
