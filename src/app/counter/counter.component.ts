import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter, tr[appCounter], li[appCounter]',
  template: `
    <div>
      counter works!
      <h3>{{time}}</h3>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  time = (new Date()).toLocaleTimeString()

  constructor(private cdr: ChangeDetectorRef) {
    // cdr.detach()
  }

  ngOnInit(): void {
    // this.cdr.detectChanges()
    setInterval(() => {
      this.time = (new Date()).toLocaleTimeString()
      //   // this.cdr.detectChanges()
    }, 1000)
    debugger
  }

}
