import { Inject, Injectable } from '@angular/core';
import { mockAlbums } from '../mocks/albums';
import { HttpClient } from '@angular/common/http'
import { AlbumItemView, AlbumsSearchResponse } from '../model/album';
import { API_URL, INITIAL_RESULTS } from '../tokens';
import { AuthService } from './auth.service';

import { map, pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
  // providedIn: MusicModule,
})
export class SearchService {

  constructor(
    @Inject(INITIAL_RESULTS) private results: AlbumItemView[],
    @Inject(API_URL) private api_url: string,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  searchAlbums(query: string) {
    return this.http.get<AlbumsSearchResponse>(this.api_url + 'search', {
      params: {
        type: 'album',
        query
      },
      headers: {
        Authorization: `Bearer ${this.auth.getToken()}`
      },
    }).pipe(
      // obs => obs,
      // pluck('albums.items'.split('.'))
      // pluck('albums','items')
      map(resp => resp.albums.items)
    )
  }
}
