import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { API_URL, INITIAL_RESULTS } from './tokens';

// class MyBetterAwesomeHttpClient extends HttpClient { }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: HttpClient,
    //   useClass: MyBetterAwesomeHttpClient
    // },
    {
      provide: API_URL,
      useValue: environment.api_url
    },
    {
      provide: INITIAL_RESULTS,
      useValue: []
    },
    // {
    //   provide: SearchService,
    //   useFactory(results: any, api: string, http: HttpClient) {
    //     return new SearchService(results, api, http)
    //   },
    //   // deps: ['INITIAL_RESULTS', 'API_URL', HttpClient]
    // },
    // {
    //   provide: SearchService,
    //   useClass: SearchService
    // },
    // SearchService
    // {
    //   provide: SearchServiceA,
    //   useExisting: SearchService
    // },
  ]
})
export class CoreModule { }
