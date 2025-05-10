import { Component, inject } from '@angular/core';
import { GifsService } from '@app/gifs/services/gif.service';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  gifsService = inject(GifsService);
}
