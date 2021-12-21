import { Component, Input, OnInit } from '@angular/core';
import { AlbumItemView } from 'src/app/core/model/album';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() results: AlbumItemView[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
