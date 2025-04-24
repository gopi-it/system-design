import { Component, effect, signal } from '@angular/core';

interface Message {
  fromServer: boolean;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  socket!: WebSocket;
  isConnected = false;

  public count = 0;
  public intervalId: any;

  public messages: Message[] = [];
  public chatMessage = '';

  public autoChatStatus = false;

  ngOnInit() {
    this.socket = new WebSocket('ws://localhost:8080');

    this.socket.onopen = (event) => {
      console.log('Connection Opened::');
      this.isConnected = true;

      // this.autoSend();
    };
    this.socket.onclose = (event) => {
      console.log('Connection Closed::');
      this.isConnected = false;
    };
    this.socket.onmessage = (event) => {
      console.log('Connection onmessage::', event.data);
      this.updateChat(event.data, true);
    };
  }

  toggleAutoChat() {
    if (this.autoChatStatus) {
      this.autoChatStatus = false;
      clearInterval(this.intervalId);
    } else {
      this.autoChatStatus = true;
      this.autoSend();
    }
  }

  autoSend() {
    this.intervalId = setInterval(() => {
      this.count++;
      this.chatMessage = 'Message:: ' + this.count;
      this.send();
    }, 2000);
  }

  send() {
    this.socket.send(this.chatMessage);
    this.updateChat(this.chatMessage, false);
    this.chatMessage = '';
  }

  updateChat(message: string, fromServer: boolean) {
    this.messages.push({
      message,
      fromServer,
    });
    setTimeout(() => {
      document.querySelector('.message:last-child')?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
