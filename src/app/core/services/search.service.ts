import { Inject, Injectable } from '@angular/core';
import { mockAlbums } from '../mocks/albums';
import { HttpClient } from '@angular/common/http'
import { AlbumItemView } from '../model/album';

/// can be replaced when compiling:
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(
    @Inject('INITIAL_RESULTS') private results: AlbumItemView[],
    @Inject('API_URL') private api_url: string,
    private http: HttpClient
  ) { }

  searchAlbums(query: string) {
    const res = this.http.get<AlbumItemView[]>(this.api_url + 'search', {
      params: {
        type: 'album'
      },
      headers: {},
    })

    return res
  }
}
