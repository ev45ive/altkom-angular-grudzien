import { Component, Input, OnInit } from '@angular/core';
import { AlbumItemView } from 'src/app/core/model/album';


@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() album!: AlbumItemView

  constructor() { }

  ngOnInit(): void {
  }

}
