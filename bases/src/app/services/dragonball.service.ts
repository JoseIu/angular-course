import { Injectable, signal } from '@angular/core';
import { Character } from '../types/Character.i';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {

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

  onAddCharacter(newCharacter:Character) {
    if(!newCharacter) return

    this.characters.update((prev) => [...prev, newCharacter]);
  }
}

