import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { mockAlbums } from './core/mocks/albums';
import { INITIAL_RESULTS } from './core/tokens';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    PlaylistsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    environment.production ? [] : [
      {
        provide: INITIAL_RESULTS,
        useValue: mockAlbums
      }
    ]
  ],
  bootstrap: [
    // CounterComponent,
    AppComponent,
  ]
})
export class AppModule {

  // ngDoBootstrap(app: ApplicationRef) {
  //   app.bootstrap(AppComponent, 'app-root')
  // }
}
