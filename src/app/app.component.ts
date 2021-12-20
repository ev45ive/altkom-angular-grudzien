
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Angular !!';

  alert() {
    console.log('Alert')

    // NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. 
    //  Previous value: 'Angular !!'. Current value: 'Zmieniono'.. Find more at https://angular.io/errors/NG0100
    // this.title = 'Zmieniono'


    // Change After Rendering!!
    // if (this.title !== 'Zmieniono') {
    //   setTimeout(() => {
    //     this.title = 'Zmieniono'
    //   })
    // }
  }

}


// console.log(AppComponent.ɵcmp)
// console.log(AppComponent.ɵfac)