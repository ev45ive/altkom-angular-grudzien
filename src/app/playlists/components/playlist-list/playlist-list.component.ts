import { NgForOf, NgForOfContext, NgIf } from '@angular/common';
import { Attribute, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';

NgIf
NgForOf
NgForOfContext  // => $implicit

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  // inputs:['playlists:items'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistListComponent implements OnInit {

  @Input('items') playlists: Playlist[] = []

  @Input() selectedId = ''

  @Output() selectedIdChange = new EventEmitter()

  constructor(@Attribute('placki') niezmienny: string) { }

  select(id: string) {
    // this.selectedId = id
    // this.selectedIdChange.subscribe(event => ...)
    this.selectedIdChange.emit(id)
  }


  ngOnInit(): void {
    // this.selectedIdChange
    // debugger
    // if (!this.playlists) throw new Error('Missing items')
  }

}
