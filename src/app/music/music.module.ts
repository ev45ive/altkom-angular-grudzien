import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { AlbumSearchComponent } from './containers/album-search/album-search.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MusicComponent,
    AlbumSearchComponent,
    AlbumCardComponent,
    SearchFormComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
