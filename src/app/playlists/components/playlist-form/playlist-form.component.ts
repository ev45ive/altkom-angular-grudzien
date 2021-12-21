import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistFormComponent implements OnInit {

  @Input() playlist!: Playlist
  draft!: Playlist


  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  clickCancel() { this.cancel.emit() }
  clickSave() { this.submit.emit(this.draft) }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChanges', changes);
    this.draft = { ...this.playlist }
  }

  hasUnsavedChanges() {
    return JSON.stringify(this.playlist) !== JSON.stringify(this.draft)
  }


  @ViewChild('nameRef', { /* read: ElementRef  */ })
  nameRef!: ElementRef

  ngOnInit(): void {
    // this.draft = this.playlist
    // this.draft = Object.assign({}, this.playlist)
    // this.draft = { ...this.playlist, tracks:[...this.playlist.tracks] }
    // this.draft = JSON.parse(JSON.stringify(this.playlist))
    console.log('ngOnInit', (window as any).playlist_name);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log('ngOnInit', this.nameRef);
    this.nameRef.nativeElement.focus()
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    console.log('ngOnDestroy');
  }
}
