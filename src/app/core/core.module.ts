import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { API_URL, INITIAL_RESULTS } from './tokens';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthService } from './services/auth.service';
import { ErrorInterceptor } from './services/error.interceptor';
import { ErrorsModule } from './modules/errors/errors.module';


// class MyBetterAwesomeHttpClient extends HttpClient { }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientXsrfModule.disable(),
    HttpClientModule,
    ErrorsModule, // ModuleWithProviders
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true,
        allowedUrls: [environment.api_url]
      }
    }),
  ],
  providers: [
    //  Cannot mix multi providers and regular providers
   
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
export class CoreModule {

  constructor(
    @Inject(HTTP_INTERCEPTORS) inter: any,
    private auth: AuthService
  ) {
    auth.init()
  }
}
