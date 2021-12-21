import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistFormComponent implements OnInit {

  @Input() playlist = {
    id: '123',
    name: 'Best playlist form',
    public: true,
    description: 'my <3 playlist'
  }

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  clickCancel() { this.cancel.emit() }
  clickSave() { this.submit.emit() }

  constructor() { }

  ngOnInit(): void { }

}
