import { Component, inject } from '@angular/core';
import { GifListSkeletonComponent } from '@app/gifs/components/gif-list-skeleton/gif-list-skeleton.component';
import { GifsService } from '@app/gifs/services/gif.service';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent, GifListSkeletonComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifsService = inject(GifsService);
  onSearch(search: string) {
    if (!search) return;
    this.gifsService.searchGifs(search).subscribe((gifs) => {
      this.gifsService.searchGifList.set(gifs);
      this.gifsService.isSearchingGif.set(false);
    });
  }
}
