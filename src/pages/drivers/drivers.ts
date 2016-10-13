import {
    Component
} from '@angular/core';
import {
    NavController
} from 'ionic-angular';

// Pages
import {
    DriverProfile
} from '../driver-profile/driver-profile';

// Providers
import {
    DriversList
} from '../../providers/drivers-list';

/*
  Generated class for the Drivers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-drivers',
    templateUrl: 'drivers.html'
})
export class Drivers {

    driverProfilePage = DriverProfile;

    constructor(public navCtrl: NavController, private driversList: DriversList) {
        this.a = 79;
        this.b = 59;
        this.c = 39;
        this.d = 19;

        // Assign drivers to scope
        this.drivers = driversList.drivers;
        console.log(this.drivers);

        // Set list filter to nothing
        this.driverFilter = ''
    }

    ionViewDidLoad() {

    }

}
