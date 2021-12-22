import { Inject, Injectable } from '@angular/core';
import { mockAlbums } from '../mocks/albums';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
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

    return this.http.get<unknown>(this.api_url + 'search', {
      params: {
        type: 'album',
        query
      },
      headers: {
        Authorization: `Bearer ${this.auth.getToken()}`
      },
    }).pipe(
      map(resp => {
        isAlbumSearchResponse(resp)
        return resp.albums.items
      }),
      catchError(error => {
        if (!(error instanceof HttpErrorResponse)) {
          throw new Error('Unexpected error')
        }

        if (!isSpotifyError(error.error)) {
          throw new Error('Unexpected error')
        }
        const spotifyError = error.error.error.message
        return throwError(() => new Error(spotifyError))
      })
    )
  }
}

// https://github.com/colinhacks/zod#parse
//  z.object({ albums: z.object({ items: z.array() })... .parse(res)

function isAlbumSearchResponse(res: any): asserts res is AlbumsSearchResponse {
  if (!('albums' in res && 'items' in res.albums && Array.isArray(res.albums.items))) {
    throw new Error('Unexpected error')
  }
}

interface SpotifyError {
  error: {
    message: string
  }
}

function isSpotifyError(error: Error | SpotifyError): error is SpotifyError {
  return 'error' in error && 'messsage' in error.error
}

// if ('error' in error) {
//   error.error.message
// }

// Not all code paths return a value

type AllowedDataTypes = string | number // | undefined 

function parseData(data: AllowedDataTypes) {
  // const num = Number(data)
  // isNaN(num)

  // Type Narrowing
  if (typeof data === 'string') {
    return data.toLocaleLowerCase()
  } else if (typeof data === 'number') {
    return data.toFixed(2)
  } else {
    exhaustivenessCheck(data)
    // const _impossible: never = data
    // throw new Error('unexpected value' + data)
    // const x = 123 // Unreachable code detected.ts(7027)
  }
}

function exhaustivenessCheck(never: never): never {
  throw new Error('unexpected value' + never)
}



// (new Date() ) instanceof Date

// Structural typing (not Nominal)

// interface Point { x: number, y: number }
// interface Vector { x: number, y: number, length: number }

// let p: Point = { x: 134, y: 23 }
// let v: Vector = { x: 134, y: 23, length: 123 }

// p = v

// v = p // Property 'length' is missing in type 'Point' but required in type 'Vector'.ts(2741)

// p.length // Property 'length' does not exist on type 'Point'.ts(2339)



let magic: any;

let aMillionDOllars = magic.get().aMIllion.$dollars.now()
aMillionDOllars.spend()

// VS

let sorry: unknown;
sorry = aMillionDOllars;

if (typeof sorry === 'string') {
  sorry.toLocaleLowerCase()
} 