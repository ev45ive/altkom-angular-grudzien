import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistFormComponent implements OnInit {

  playlist = {
    id:'123',
    name:'Best playlist form',
    public: true,
    description: 'my <3 playlist'
  }

  constructor() { }

  ngOnInit(): void { }

}
