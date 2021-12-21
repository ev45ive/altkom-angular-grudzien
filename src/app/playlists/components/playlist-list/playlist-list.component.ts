import { NgForOf, NgForOfContext, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

NgIf
NgForOf
NgForOfContext  // => $implicit

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  playlists = [{
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


  constructor() { }

  ngOnInit(): void {
  }

}
