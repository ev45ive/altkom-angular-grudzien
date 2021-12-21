import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumSearchComponent } from './containers/album-search/album-search.component';
import { MusicComponent } from './music.component';

// '/music/**',
const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
    children: [
      {
        path: 'search',
        component: AlbumSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
