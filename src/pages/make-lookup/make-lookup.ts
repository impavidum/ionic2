import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Providers
import {Edmunds} from '../../providers/edmunds';

// Pages
import {ModelLookup} from '../model-lookup/model-lookup';

/*
   Provides a list of vehicle makes
   Passes make to ModelLookupPage
*/
@Component({
    selector: 'page-make-lookup',
    templateUrl: 'make-lookup.html'
})

export class MakeLookup {

    // Store Page for pushing on Nav Stack
    modelLookupPage = ModelLookup;

    // Constructor Function
    constructor(public navCtrl: NavController, private edmunds: Edmunds) {

        // Call for makes list
        this.getMakeList();

        // Set list filter to nothing
        this.makeFilter = ''
    }

    // Retrieve List of Makes from Edmunds API
    getMakeList(){
        this.edmunds.getMakeList()
        .then(data => {
            // Attach retrieved data to scope
            this.makes = data.makes;
            this.makesCount = data.makesCount;
        });
    }

    ionViewDidLoad() {
        // Do some stuff on load
    }

}
