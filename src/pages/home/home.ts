import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Providers
import {Edmunds} from '../../providers/edmunds';

// Pages
import {MakeLookup} from '../make-lookup/make-lookup';
import {VinLookup} from '../vin-lookup/vin-lookup';

/*
    Home Page
    General App Landing Page
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

    // Pages for pushing onto Nav Stack
    makeLookupPage = MakeLookup;
    vinLookupPage = VinLookup;

    // Constructor function
    constructor(public navCtrl: NavController, private edmunds: Edmunds) {

    }

}
