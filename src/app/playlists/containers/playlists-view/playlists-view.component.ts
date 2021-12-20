import { Component, OnInit } from '@angular/core';

// enum Modes { details, form }

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {
  // Modes = Modes
  // mode = Modes.details

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
