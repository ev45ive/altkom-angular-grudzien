
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, concatAll, exhaustAll, filter, map, mergeAll, Observable, startWith, Subscription, switchAll, switchMap, tap } from 'rxjs';
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
  message = ''
  query = ''

  results = this.route.queryParamMap.pipe(
    map(qp => qp.get('q')),
    filter((q): q is string => q != ''),
    tap((query) => {
      this.query = query;
      this.message = ''
    }),
    switchMap(query =>
      this.service.searchAlbums(query).pipe(
        startWith(null),
        catchError(error => { this.message = error.message; return [] })
      )),
  )

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: SearchService
  ) { }


  ngOnInit(): void { }

  search(query: string) {
    this.router.navigate(['.'], {
      queryParams: {
        q: query,
      },
      relativeTo: this.route
    })
  }


  ngOnDestroy(): void {
  }

}
