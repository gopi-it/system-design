import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrl: './fullscreen.component.scss',
})
export class FullscreenComponent implements OnInit, OnDestroy {
  public error = signal('');
  public onFullScreen = signal(false);

  public windowElement = viewChild<ElementRef>('windowEl');

  fullScreenListener = () => {
    if (document.fullscreenElement === null) {
      this.onFullScreen.set(false);
    } else {
      this.onFullScreen.set(true);
    }
  };

  ngOnInit() {
    if (!document.fullscreenEnabled) {
      this.error.set('Full screen is not supported by your browser');
    }

    document.addEventListener('fullscreenchange', this.fullScreenListener);
  }

  maximixe(): void {
    this.windowElement()
      ?.nativeElement.requestFullscreen()
      .then(() => {
        console.log('OnFullscreen::');
      })
      .catch(() => {
        console.log('Error::');
      });
  }

  closeFullSceen(): void {
    document.exitFullscreen();
  }

  ngOnDestroy() {
    document.removeEventListener('fullscreenchange', this.fullScreenListener);
  }
}
