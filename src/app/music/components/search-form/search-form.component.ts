import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  
  @Input() query = '';

  @Output() search = new EventEmitter<string>();

  constructor() { }

  

  submit() {
    this.search.emit(this.query)
  }

  ngOnInit(): void {
  }

}
