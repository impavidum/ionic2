import {
    Injectable,
    Pipe
} from '@angular/core';

/*
  Generated class for the DriverScore pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
    name: 'driverScore'
})
@Injectable()
export class DriverScore {
    /*
      Takes a avg_score of driver and makes it a letter grade.
     */
    transform(value, args) {
        if (value === 100) {
            return 'A+';
        } else if (value > 79) {
            return 'A';
        } else if (value > 59) {
            return 'B';
        } else if (value > 39) {
            return 'C';
        } else if (value > 19) {
            return 'D';
        } else {
            return 'F';
        }
    }
}
