import { Injectable } from '@angular/core';
import { mockAlbums } from '../mocks/albums';
import { HttpClient } from '@angular/common/http'
import { AlbumItemView } from '../model/album';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  searchAlbums(query: string) {
    const res = this.http.get<AlbumItemView[]>(`assets/albums.json`, {
      params: {}, headers: {},
    })

    return res
  }
}
