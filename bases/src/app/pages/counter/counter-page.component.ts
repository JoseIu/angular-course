import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counter: number = 10;

  conuterSignal = signal(10);

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

  incrementeSignal(value: number): void {
    this.conuterSignal.update((current) => current + value);
  }

  resetSignal(): void {
    this.conuterSignal.set(10);
  }
}
