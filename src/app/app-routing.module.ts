import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/music/search',
  },
  {
    path: 'music',
    loadChildren: () => //
      import('./music/music.module') //
        .then(m => m.MusicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
