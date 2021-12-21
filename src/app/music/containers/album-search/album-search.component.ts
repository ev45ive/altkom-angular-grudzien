import { Component, OnInit } from '@angular/core';
import { mockAlbums } from 'src/app/core/mocks/albums';


@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.scss']
})
export class AlbumSearchComponent implements OnInit {
  
  results = mockAlbums

  constructor() { }

  ngOnInit(): void {
  }

}
