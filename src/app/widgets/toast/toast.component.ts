import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  show = false;

  showToast() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 5000);
  }
}
