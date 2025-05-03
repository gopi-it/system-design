import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  public count = 0;
  public hasAccess = signal(false);

  grantNotification() {
    Notification.requestPermission()
      .then(() => {
        this.hasAccess.set(true);
      })
      .catch(() => {
        this.hasAccess.set(false);
      });
  }

  ngOnInit(): void {
    this.hasAccess.set(Notification.permission === 'granted');
  }

  sendNotification() {
    this.count += 1;
    new Notification('Test Notification', {
      body: `(ID: ${this.count}) Hey this is just a test notification you just triggered!`,
    });
  }
}
