import { Component, OnInit } from '@angular/core';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlists-view, [appPlaylistsView]',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {

  mode: 'details' | 'edit' = 'details'


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

  selectedId = '345'
  selected = this.playlists[2]

  selectPlaylist(id: string) {
    console.log(id);
    this.selectedId = id
    this.selected = this.playlists.find(p => p.id === id)!
  }

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
