import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-speech-text',
  templateUrl: './speech-text.component.html',
  styleUrl: './speech-text.component.scss',
})
export class SpeechTextComponent {
  recognition: any;
  isListening: boolean = false;
  transcript = signal('');

  constructor() {
    this.speechToTextSetup();
  }

  speechToTextSetup() {
    // Initialize SpeechRecognition
    const SpeechRecognition =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US'; // Set language to English
      this.recognition.continuous = true; // Continuous listening
      this.recognition.interimResults = false; // Only capture final result

      // Handle the result from the speech recognition
      this.recognition.onresult = (event: any) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript;
        console.log('Result::', event, transcript);

        this.transcript.update((val) => {
          return (val += transcript + ' ');
        });
      };

      // Handle speech recognition end event
      this.recognition.onend = () => {
        console.log('recording end::');
        if (this.isListening) {
          console.log('recording restart::');
          this.recognition.start(); // Automatically restart recognition after pause
        }
      };

      this.recognition.onerror = (event: any) => {
        console.log('recording Error::', event.error);
        if (event.error === 'no-speech') {
          this.recognition.start(); // Restart on 'no-speech' error
        }
      };
    }
  }

  textToSpeechSetup() {
    let utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'en-IN';
    utterance.text = this.transcript();

    speechSynthesis.speak(utterance);
  }

  // Start or Stop speech recognition
  toggleRecognition() {
    if (this.isListening) {
      console.log('Stop recording::');
      this.recognition.stop();
    } else {
      console.log('Start recording::');
      this.transcript.set('');
      this.recognition.start();
    }
    this.isListening = !this.isListening;
  }

  updateValue(val: any) {
    this.transcript.set(val);
  }
}
