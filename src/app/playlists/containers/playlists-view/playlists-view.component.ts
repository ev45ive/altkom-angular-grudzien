import { Component, OnInit } from '@angular/core';

enum Modes { details = 'details', form = 'form' }

@Component({
  selector: 'app-playlists-view, [appPlaylistsView]',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {
  // Modes = Modes
  // mode = Modes.details
  // isEditMode() { return this.mode === Modes.details }

  mode: 'details' | 'edit' = 'details'

  constructor() { }

  editMode() {
    this.mode = 'edit'
  }

  cancel() {
    this.mode = 'details'
  }

  ngOnInit(): void {
  }

}
