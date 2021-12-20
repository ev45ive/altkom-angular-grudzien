import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular !!';

  alert(){
    console.log('Alert')
  }
  
}


// console.log(AppComponent.ɵcmp)
// console.log(AppComponent.ɵfac)