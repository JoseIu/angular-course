import { Component, input } from '@angular/core';
import { Gif } from '@app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  images = input.required<Gif[]>();
}
