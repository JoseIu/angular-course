import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable, tap } from 'rxjs';
import { Gif } from '../interfaces/gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { GifMapper } from '../mapper/gif.mapper';

const loadFromStorage = () => {
  const gifs = JSON.parse(localStorage.getItem('gifs') || '{}');

  return gifs;
};

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  isTrendingGifLoading = signal<boolean>(true);

  searchHistory = signal<Record<string, Gif[]>>(loadFromStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  searchGifList = signal<Gif[]>([]);
  isSearchingGif = signal<boolean>(false);

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToStorage = effect(() => {
    const gifs = this.searchHistory();
    localStorage.setItem('gifs', JSON.stringify(gifs));
  });

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.apiUrl}/gifs/trending`, {
        params: {
          api_key: environment.apiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifs(resp.data);
        this.trendingGifs.set(gifs);
        this.isTrendingGifLoading.set(false);
      });
  }

  searchGifs(search: string): Observable<Gif[]> {
    this.isSearchingGif.set(true);

    return this.http
      .get<GiphyResponse>(`${environment.apiUrl}/gifs/search`, {
        params: {
          api_key: environment.apiKey,
          limit: 20,
          q: search,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifs(items)),

        //history search
        tap((items) => {
          this.searchHistory.update((history) => ({
            ...history,
            [search]: items,
          }));
        })
      );
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
