import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

NgIf

const censor: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  const badword = 'batman';
  if (String(control.value).includes(badword)) {
    return { 'censor': { badword } }
  }
  return null
  // return {
  //   required: true,
  //   minlength: { requiredLength: 1231241 }
  // }
}

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() query = '';
  optionsOpen = false

  @Output() search = new EventEmitter<string>();

  searchForm = new FormGroup({
    'query': new FormControl('', [
      censor,
      Validators.required,
      Validators.minLength(3),
      // Validators.requiredTrue, // checkbox
      Validators.pattern('[a-zA-Z0-9 ]*'),
    ]),
    'options': new FormGroup({
      'type': new FormControl('album', []),
      'markets': new FormArray([
        new FormGroup({
          'code': new FormControl('PL', []),
        })
      ])
    }, [])
  })
  markets = this.searchForm.get('options.markets') as FormArray

  addMarket() {
    this.markets.push(new FormGroup({
      'code': new FormControl('', []),
    }))
  }
  removeMarket(i: number) {
    this.markets.removeAt(i)
  }

  constructor() {
    (window as any).form = this.searchForm
  }



  submit() {
    this.search.emit(this.searchForm.value.query)
  }

  ngOnInit(): void {
  }

}
