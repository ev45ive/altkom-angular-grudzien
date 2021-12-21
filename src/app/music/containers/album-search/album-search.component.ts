
import { Component, Inject, OnInit } from '@angular/core';
import { AlbumItemView } from 'src/app/core/model/album';
import { SearchService } from 'src/app/core/services/search.service';


@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.scss']
})
export class AlbumSearchComponent implements OnInit {
  results: AlbumItemView[] = []

  constructor(
    private service: SearchService
  ) { }

  search(query: string) {
    const res = this.service.searchAlbums(query)

    res.subscribe(data => {
      // console.log('odebrano', data)
      this.results = data
    })
  }

  ngOnInit(): void { }

}
