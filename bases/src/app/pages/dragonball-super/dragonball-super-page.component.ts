import { Component, inject } from '@angular/core';
import { AddCharacterComponent } from "../../components/dragon-ball/add-character/add-character.component";
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {
  public dragonBallServie = inject(DragonBallService)



}
