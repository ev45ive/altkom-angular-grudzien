import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {

  playlist = {
    id:'123',
    name:'Best playlist',
    public: true,
    description: 'my <3 playlist'
  }

  constructor() { }

  ngOnInit(): void { }

}
