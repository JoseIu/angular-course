import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../types/Character.i';

const loadFromLocalStorage = (): Character[] => {
  const characters = JSON.parse(
    localStorage.getItem('characters') || '[]'
  ) as Character[];

  return characters;
};

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    const characters = this.characters();
    localStorage.setItem('characters', JSON.stringify(characters));
  });

  onAddCharacter(newCharacter: Character) {
    if (!newCharacter) return;

    this.characters.update((prev) => [...prev, newCharacter]);
  }
}
