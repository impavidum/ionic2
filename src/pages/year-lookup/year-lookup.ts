import {
    Component
} from '@angular/core';
import {
    NavController,
    NavParams
} from 'ionic-angular';

// Providers
import {
    Edmunds
} from '../../providers/edmunds';

// Pages
import {
    VehicleDetail
} from '../vehicle-detail/vehicle-detail';

/*
   Provides a list of years given a vehicle model
   Passes Make, Model, and Year to Vehicles Page
*/
@Component({
    selector: 'page-year-lookup',
    templateUrl: 'year-lookup.html'
})

export class YearLookup {

    // Store Page for pushing on Nav Stack
    vehicleDetailPage = VehicleDetail;

    // Constructor function
    constructor(public navCtrl: NavController, params: NavParams, private edmunds: Edmunds) {

        // Attach navParams to scope
        this.years = params.data.model.years;
        this.make = params.data.make;
        this.model = params.data.model.name;
    }

    ionViewDidLoad() {
        // Do some stuff on load
    }

}
