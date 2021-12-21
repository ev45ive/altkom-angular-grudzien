import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  // @Input('playlist') playlist!: Playlist
  @Input() playlist!: Playlist

  constructor() { }

  ngOnInit(): void {
  }

}
