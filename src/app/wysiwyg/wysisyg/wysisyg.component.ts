import { Component } from '@angular/core';

@Component({
  selector: 'app-wysisyg',
  templateUrl: './wysisyg.component.html',
  styleUrl: './wysisyg.component.scss',
})
export class WysisygComponent {
  public execCommand(command: string, value?: any): void {
    document.execCommand(command, false, value);

    // this.formatText(command);
  }

  public createLink(): void {
    this.execCommand('createLink', prompt('Enter the URL', 'http://'));
  }

  public formatText(command: string) {
    // returns a Selection object that represents the range of text (or other content) that the user has selected
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    //A Range represents the section of the DOM that the user has selected.
    // It can contain part or all of an element’s text, or even cross multiple elements.
    // The getRangeAt(0) method gets the first range (since a user usually makes one continuous selection at a time, 0 refers to the first range).
    const range = selection.getRangeAt(0);

    //range.extractContents() removes the selected content from the DOM and returns it as a DocumentFragment.
    //A DocumentFragment is a minimal, lightweight container that can hold part of the document's DOM structure, but is not part of the actual DOM tree.
    const selectedText = range.extractContents();

    const span = document.createElement('span');
    span.appendChild(selectedText);

    switch (command) {
      case 'bold':
        span.style.fontWeight = 'bold';
        break;
      case 'italic':
        span.style.fontStyle = 'italic';
        break;
      case 'underline':
        span.style.textDecoration = 'underline';
        break;
    }

    range.insertNode(span);
  }

  insertLink() {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.extractContents();

    const url = prompt('Enter the URL:', 'https://');
    if (url) {
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.appendChild(selectedText);

      range.insertNode(anchor);
    }
  }
}
