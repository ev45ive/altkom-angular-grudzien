import { NgForOf, NgForOfContext, NgIf } from '@angular/common';
import { Attribute, Component, Input, OnInit } from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';

NgIf
NgForOf
NgForOfContext  // => $implicit

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  // inputs:['playlists:items']
})
export class PlaylistListComponent implements OnInit {

  @Input('items') playlists: Playlist[] = []

  selectedId = ''

  constructor(@Attribute('placki') niezmienny: string) { }

  select(id: string) {
    this.selectedId = id
  }


  ngOnInit(): void {
    // if (!this.playlists) throw new Error('Missing items')
  }

}
