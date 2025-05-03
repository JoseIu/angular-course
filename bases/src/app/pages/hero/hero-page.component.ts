import { Component, computed, signal } from '@angular/core';

import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
})
export class HeroPageComponent {
  name = signal<string>('Ironman');
  age = signal<number>(45);

  heroDescription = computed(() => {
    const desription = `${this.name()} - ${this.age()}`;
    return desription;
  });

  capitalozedName = computed(() => {
    const name = this.name();
    return name.toUpperCase();
  });

  // getHeroDescription(): string {
  //   return `${this.name()} - ${this.age()}`;
  // }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }
  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
  chageAge(age: number): void {
    this.age.set(age);
  }
}
