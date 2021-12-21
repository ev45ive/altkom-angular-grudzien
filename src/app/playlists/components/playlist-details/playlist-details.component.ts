import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  // @Input('playlist') playlist!: Playlist
  @Input() playlist!: Playlist

  @Output() edit = new EventEmitter();

  constructor() { }

  clickEdit() { this.edit.emit() }
  ngOnInit(): void { }

}
