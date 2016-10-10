import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Pages
import {YearLookup} from '../year-lookup/year-lookup';

/*
  Provides a list of models give a vehicle make
  Passes Make and Model to YearLookupPage
*/
@Component({
  selector: 'page-model-lookup',
  templateUrl: 'model-lookup.html'
})

export class ModelLookup {

    // Store Page for pushing on Nav Stack
    yearLookupPage = YearLookup;

    // Constructor Function
    constructor(public navCtrl: NavController, params: NavParams) {

        // Attach Nav Params to the scope
        this.make = params.data.name;
        this.models = params.data.models;

        // Set Filter to nothing
        this.modelFilter = ''
    }

    ionViewDidLoad() {
        // Do stuff on load if you ever want to
    }

}

