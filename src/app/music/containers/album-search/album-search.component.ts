
import { Component, Inject, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
    const res: Observable<AlbumItemView[]> = this.service.searchAlbums(query)

    const sub: Subscription = res.subscribe(data => {
      this.results = data
    })
    sub.unsubscribe()

    res.subscribe(data => {
      this.results = data
    })
  }

  ngOnInit(): void { }

}
