import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistFormComponent implements OnInit {

  @Input() playlist!: Playlist

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  clickCancel() { this.cancel.emit() }
  clickSave() { this.submit.emit(this.playlist) }

  constructor() { }

  ngOnInit(): void { }

}
