import { Injectable } from '@angular/core';
import { mockAlbums } from '../mocks/albums';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  searchAlbums(query: string) {
    const res = this.http.get(`assets/albums.json`, {
      params: {}, headers: {},
    })

    return res
  }
}
