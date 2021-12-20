import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter, div.counter',
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

  constructor() { }

  ngOnInit(): void {
  }

}
