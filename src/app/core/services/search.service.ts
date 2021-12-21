import { Injectable } from '@angular/core';
import { mockAlbums } from '../mocks/albums';

// ng g s core/services/search

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor() { }

  searchAlbums(query: string) {
    return mockAlbums
  }
}
