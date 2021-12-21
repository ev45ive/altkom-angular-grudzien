import { NgForOf, NgForOfContext, NgIf } from '@angular/common';
import { Attribute, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';

NgIf
NgForOf
NgForOfContext  // => $implicit

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  // inputs:['playlists:items'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistListComponent implements OnInit {

  @Input('items') playlists: Playlist[] = []

  @Input() selectedId = ''

  @Output() selectedIdChange = new EventEmitter()

  constructor(@Attribute('placki') niezmienny: string) { }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

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
