import { Inject, Injectable } from '@angular/core';
import { mockAlbums } from '../mocks/albums';
import { HttpClient } from '@angular/common/http'
import { AlbumItemView, AlbumsSearchResponse } from '../model/album';
import { API_URL, INITIAL_RESULTS } from '../tokens';
import { AuthService } from './auth.service';

import { catchError, map, pluck } from 'rxjs/operators'
import { from, of, throwError } from 'rxjs';

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
      map(resp => resp.albums.items),
      catchError(error => {

        return throwError(() => new Error(error.error.error.message))

        // throw new Error('Unexpected error')
        // return this.http.get<AlbumItemView[]>('assets/albums.json')
        // return [this.results]
        // return [/* complete */]
        // return [[], [], []]
        // return of([])
        // return from([this.results])
      })
    )
  }
}


function parseData(data: string | number) {

}


// Structural typing (not Nominal)

interface Point { x: number, y: number }
interface Vector { x: number, y: number, length: number }

let p: Point = { x: 134, y: 23 }
let v: Vector = { x: 134, y: 23, length: 123 }

p = v

// v = p // Property 'length' is missing in type 'Point' but required in type 'Vector'.ts(2741)

// p.length // Property 'length' does not exist on type 'Point'.ts(2339)

