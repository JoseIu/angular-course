import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../../types/Character.i';

@Component({
  selector: 'daragonball-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {

  newCharacter = output<Character>()
  name = signal<string>('Gohan');
  power = signal<number>(100);

  onAddCharacter() {
      if (!this.name() || !this.power() || this.power() <= 0) return;
      const newCharacter: Character = {
        id: Math.floor(Math.random() * 1000),
        name: this.name(),
        power: this.power(),
      };
      this.newCharacter.emit(newCharacter)
    }
}
