import {
    Component
} from '@angular/core';
import {
    NavController
} from 'ionic-angular';

/*
  Generated class for the DrivingLog page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-driving-log',
    templateUrl: 'driving-log.html'
})
export class DrivingLog {

    constructor(public navCtrl: NavController) {}

    ionViewDidLoad() {
        console.log('Hello DrivingLog Page');
    }

}
