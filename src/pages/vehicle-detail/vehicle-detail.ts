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


/*
  Generated class for the VehicleDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-vehicle-detail',
    templateUrl: 'vehicle-detail.html'
})
export class VehicleDetail {


    constructor(public navCtrl: NavController, params: NavParams, private edmunds: Edmunds) {

        // Attach navParams to scope
        this.year = params.data.year.year;
        this.make = params.data.make;
        this.model = params.data.model;
        this.edmunds.getVehicleDetail({
                year: this.year,
                make: this.make,
                model: this.model
            })
            .then(data => {

                // Attach retrieved data to scope
                this.styles = data.styles;
                this.currentStyle = data.styles[0];

                //                this.getVehiclePhoto(this.currentStyle.id);

            });

        this.vehicleSliderOptions = {
            loop: true,
            pager: true
        };

    }

    // Gets all vehicle styles for Make/Model/Year
    getVehicleDetail(vehicleDetails) {
        this.edmunds.getVehicleDetail(vehicleDetails)
            .then(data => {

                // Attach retrieved data to scope
                this.currentStyle = data.styles[0];
                console.log(this.currentStyle);
                //                this.getVehiclePhoto(this.currentStyle.id);

            });
    }

    //Gets photo for specific style
    getVehiclePhoto(styleId) {
        this.edmunds.getPhotoByStyleId(styleId)
            .then(data => {
                // Attach retrieved data to scope
                console.log(data);

            });
    }

    ionViewDidLoad() {
        // On load stuff
    }

}
