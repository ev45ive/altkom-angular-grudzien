import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter, tr[appCounter], li[appCounter]',
  template: `
    <div>
      <h3>{{time}}</h3>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  time = (new Date()).toLocaleTimeString()

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        // this.zone.run()
        this.time = (new Date()).toLocaleTimeString()
        this.cdr.detectChanges()
      }, 1000)
    })
  }

}
