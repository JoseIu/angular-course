import { Component, signal } from '@angular/core';
interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  name = signal<string>('Gohan');
  power = signal<number>(100);
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8500,
    },
    {
      id: 3,
      name: 'Gohan',
      power: 7000,
    },
    {
      id: 4,
      name: 'Piccolo',
      power: 6000,
    },
    {
      id: 5,
      name: 'Krillin',
      power: 5000,
    },
    {
      id: 6,
      name: 'Bulma',
      power: 1000,
    },
    {
      id: 7,
      name: 'Yamcha',
      power: 500,
    },
  ]);

  onAddCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((prev) => [...prev, newCharacter]);
  }
}
