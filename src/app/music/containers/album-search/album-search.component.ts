
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';
import { AlbumItemView } from 'src/app/core/model/album';
import { SearchService } from 'src/app/core/services/search.service';


@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.scss'],
  // providers:[
  //   SearchService
  // ]
})
export class AlbumSearchComponent implements OnInit {
  results: AlbumItemView[] = []
  message = ''
  query = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: SearchService
  ) { }

  ngOnInit(): void {
    // this.query = this.route.snapshot.queryParamMap.get('q') || ''
    this.route.queryParamMap.pipe(
      map(qp => qp.get('q')),
      filter(q => q !== '')
    ).subscribe(query => {
      if (!query) { return }

      this.query = query;
      this.message = ''
      this.results = []

      this.service.searchAlbums(query).subscribe({
        next: data => this.results = data,
        error: error => this.message = error.message
      })
    })
  }

  search(query: string) {
    this.router.navigate(['.'], {
      queryParams: {
        q: query,
      },
      relativeTo: this.route
    })
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

}
