import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  public sliderVal = 60;

  public selectedIdx = 3;

  public colors = ['#d35e65', '#d3965c', '#cad48a', '#6ed494', '#18c574'];
  public emojis = [
    {
      text: 'Awful',
      url: 'https://assets.codepen.io/210284/Disappointed.svg',
    },
    {
      text: 'Bad',
      url: 'https://assets.codepen.io/210284/Sad.svg',
    },
    {
      text: 'Okay',
      url: 'https://assets.codepen.io/210284/Expressionless.svg',
    },
    {
      text: 'Good',
      url: 'https://assets.codepen.io/210284/Smile.svg',
    },
    {
      text: 'Great',
      url: 'https://assets.codepen.io/210284/Falling_in_love.svg',
    },
  ];

  public get selectedColor() {
    return this.colors[this.selectedIdx];
  }

  public get selectedEmoji() {
    return this.emojis[this.selectedIdx];
  }

  updateRating() {
    const value = this.sliderVal;

    if (value >= 0 && value < 20) {
      this.setProperties(0);
    } else if (value >= 20 && value < 40) {
      this.setProperties(1);
    } else if (value >= 40 && value < 60) {
      this.setProperties(2);
    } else if (value >= 60 && value < 80) {
      this.setProperties(3);
    } else if (value >= 80 && value <= 100) {
      this.setProperties(4);
    }
  }

  setProperties(value: number) {
    this.selectedIdx = value;
  }
}
