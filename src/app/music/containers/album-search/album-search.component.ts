
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
  message = ''

  constructor(
    private service: SearchService
  ) { }

  search(query: string) {
    const res: Observable<AlbumItemView[]> = this.service.searchAlbums(query)

    res.subscribe({
      next: data => {
        this.results = data
      },
      error: error => {
        this.message = error.message
      },
      complete() {
        console.log('completed');
      }
    })
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}
