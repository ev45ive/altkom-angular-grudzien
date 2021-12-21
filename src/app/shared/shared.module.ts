import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    CounterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    CounterComponent,
  ]
})
export class SharedModule { }
