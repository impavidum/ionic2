import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
   Provides a list of years given a vehicle model
   Passes Make, Model, and Year to Vehicles Page
*/
@Component({
  selector: 'page-year-lookup',
  templateUrl: 'year-lookup.html'
})

export class YearLookup {

    // Constructor function
    constructor(public navCtrl: NavController, params: NavParams) {

        // Attach navParams to scope
        this.years = params.data.years;
    }

    ionViewDidLoad() {
        // Do some stuff on load
    }

    // Log out year selected for now
    yearSelected(year) {
        console.log('You selected ' + year.year);
    }

}



