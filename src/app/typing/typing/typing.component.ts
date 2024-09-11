import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.scss',
})
export class TypingComponent {
  public content = signal<string>('');

  public chatContent = `"The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt.
    In a world that's constantly evolving, it's important to remember that our dreams shape our reality. The visions we hold, the goals we set, and the passion we bring to our endeavors are what truly define our path. Embrace your dreams, no matter how big or small they may seem, for they are the seeds of the future you wish to create.`;

  public publishContent() {
    this.content.set('');
    this.typeContent(0);
  }

  public typeContent(index: number): void {
    if (index < this.chatContent.length) {
      const letter = this.chatContent[index];
      this.content.update((v) => {
        return v + letter;
      });
      setTimeout(() => {
        this.typeContent(index + 1);
      }, 50);
    }
  }
}
