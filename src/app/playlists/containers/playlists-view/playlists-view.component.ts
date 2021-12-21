import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlists-view, [appPlaylistsView]',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistsViewComponent implements OnInit {

  mode: 'details' | 'edit' = 'edit'


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

  selected = this.playlists[2]

  selectPlaylist(id: string) {
    console.log(id);
    this.selected = this.playlists.find(p => p.id === id)!
  }

  constructor() {
  }

  editMode() {
    this.mode = 'edit'
    // copy
  }

  cancel() {
    this.mode = 'details'
  }

  savePlaylist(draft: any) {
    console.log('save playlist!');

  }

  ngOnInit(): void {
    // this.draft = this.playlist
    // this.draft = Object.assign({}, this.playlist)
    // this.draft = { ...this.playlist, tracks:[...this.playlist.tracks] }
    // this.draft = JSON.parse(JSON.stringify(this.playlist))
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    console.log('parent init', (window as any).playlist_name);
  }
}
