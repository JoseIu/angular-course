import { Component, inject } from '@angular/core';
import { GifsService } from '@app/gifs/services/gif.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  gifsService = inject(GifsService);
}
