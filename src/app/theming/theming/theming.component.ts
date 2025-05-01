import { Component } from '@angular/core';

@Component({
  selector: 'app-theming',
  templateUrl: './theming.component.html',
  styleUrl: './theming.component.scss',
})
export class ThemingComponent {
  public toggle = false;

  //   const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // function handleThemeChange(event) {
  //   if (event.matches) {
  //     console.log('System switched to Dark Mode');
  //     document.body.classList.add('dark-theme');
  //   } else {
  //     console.log('System switched to Light Mode');
  //     document.body.classList.remove('dark-theme');
  //   }
  // }

  // // Listen for changes
  // darkModeMediaQuery.addEventListener('change', handleThemeChange);
}
