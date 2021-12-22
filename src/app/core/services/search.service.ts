import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AlbumsSearchResponse } from '../model/album';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(
    private http: HttpClient,
  ) { }

  searchAlbums(query: string) {
    return this.http.get<unknown>('search', {
      params: {
        type: 'album', query
      }
    }).pipe(
      map(resp => {
        isAlbumSearchResponse(resp)
        return resp.albums.items
      }),
    )
  }
}


function isAlbumSearchResponse(res: any): asserts res is AlbumsSearchResponse {
  if (!
    ('albums' in res
      && 'items' in res.albums
      && Array.isArray(res.albums.items))) {
    throw new Error('Unexpected error')
  }
}















// if ('error' in error) {
//   error.error.message
// }

// Not all code paths return a value

// type AllowedDataTypes = string | number // | undefined 

// function parseData(data: AllowedDataTypes) {
//   // const num = Number(data)
//   // isNaN(num)

//   // Type Narrowing
//   if (typeof data === 'string') {
//     return data.toLocaleLowerCase()
//   } else if (typeof data === 'number') {
//     return data.toFixed(2)
//   } else {
//     exhaustivenessCheck(data)
//     // const _impossible: never = data
//     // throw new Error('unexpected value' + data)
//     // const x = 123 // Unreachable code detected.ts(7027)
//   }
// }

// function exhaustivenessCheck(never: never): never {
//   throw new Error('unexpected value' + never)
// }



// (new Date() ) instanceof Date

// Structural typing (not Nominal)

// interface Point { x: number, y: number }
// interface Vector { x: number, y: number, length: number }

// let p: Point = { x: 134, y: 23 }
// let v: Vector = { x: 134, y: 23, length: 123 }

// p = v

// v = p // Property 'length' is missing in type 'Point' but required in type 'Vector'.ts(2741)

// p.length // Property 'length' does not exist on type 'Point'.ts(2339)



// let magic: any;

// let aMillionDOllars = magic.get().aMIllion.$dollars.now()
// aMillionDOllars.spend()

// // VS

// let sorry: unknown;
// sorry = aMillionDOllars;

// if (typeof sorry === 'string') {
//   sorry.toLocaleLowerCase()
// } 