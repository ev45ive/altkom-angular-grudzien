import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsViewComponent } from './containers/playlists-view/playlists-view.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlaylistsViewComponent,
    PlaylistListComponent,
    PlaylistDetailsComponent,
    PlaylistFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlaylistsRoutingModule
  ],
  // exports: [
  //   PlaylistsViewComponent
  // ]
})
export class PlaylistsModule { }
