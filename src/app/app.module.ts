import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { PlaylistsModule } from './playlists/playlists.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaylistsModule
  ],
  providers: [],
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
