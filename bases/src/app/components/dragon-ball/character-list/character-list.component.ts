import { Component, input } from '@angular/core';
import { Character } from '../../../types/Character.i';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
}
