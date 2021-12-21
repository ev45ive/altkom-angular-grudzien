import { Component, OnInit } from '@angular/core';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlists-view, [appPlaylistsView]',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {

  mode: 'details' | 'edit' = 'details'

  selectedId = '345'

  playlists: Playlist[] = [{
    id: '123',
    name: 'Best playlist 123',
    public: true,
    description: 'awesome playlist'
  }, {
    id: '234',
    name: 'Best playlist 234',
    public: false,
    description: 'my <3 playlist'
  }, {
    id: '345',
    name: 'Best playlist 345',
    public: true,
    description: 'my last playlist'
  }]

  selected = this.playlists[1]

  constructor() {
  }

  editMode() {
    this.mode = 'edit'
  }

  cancel() {
    this.mode = 'details'
  }

  ngOnInit(): void {
  }

}
