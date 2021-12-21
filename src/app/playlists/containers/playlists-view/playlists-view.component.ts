import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { PlaylistFormComponent } from '../../components/playlist-form/playlist-form.component';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlists-view, [appPlaylistsView]',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  selected = this.playlists[2]


  // @ViewChild('formRef')
  @ViewChild(PlaylistFormComponent)
  formRef!: PlaylistFormComponent


  selectPlaylist(id: string) {
    if (this.formRef && this.formRef.hasUnsavedChanges()) {
      return;
    }
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

  savePlaylist(draft: Playlist) {
    // console.log('save playlist!', draft);
    // const index = this.playlists.findIndex(p => p.id === draft.id)
    // this.playlists[index] = draft
    // this.playlists = [...this.playlists] // OnPush detects new Input Object!

    this.playlists = this.playlists.map(p => p.id === draft.id ? draft : p)
    this.selected = draft
    this.mode = 'details'
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

    // console.log('parent init', (window as any).playlist_name);
  }
}
