import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';

NgIf

const censor: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const badword = 'batman';

  if (String(control.value).includes(badword)) {
    return { 'censor': { badword } }
  }
  return null
}
const asyncCensor: AsyncValidatorFn = (control: AbstractControl): Observable<ValidationErrors | null> => {
  // return this.http.get('badwordfilterapi.com',{}).pipe(map(res => ...))

  return new Observable((observer) => {
    // console.log('validating');

    const handle = setTimeout(() => {
      const result = censor(control)
      // console.log('result');
      observer.next(result)
      // observer.error()
      observer.complete()
    }, 2000)

    return () => {
      // console.log('unsubsrrive');
      clearTimeout(handle)
    }
  })
  // .subscribe({
  //   next() { }, error() { }, complete() { }
  // })
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
      // censor,
      Validators.required,
      Validators.minLength(3),
      // Validators.requiredTrue, // checkbox
      Validators.pattern('[a-zA-Z0-9 ]*'),
    ], [
      asyncCensor
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

    this.searchForm.get('query')!.valueChanges.pipe(
      // length >= 3 
      filter(q => q.length >= 3),

      // no duplicates
      distinctUntilChanged(/* comparator */),

      // after stops typing for 400ms
      debounceTime(400)
    )
      .subscribe(console.log)
  }



  submit() {
    this.search.emit(this.searchForm.value.query)
  }

  ngOnInit(): void {
  }

}
