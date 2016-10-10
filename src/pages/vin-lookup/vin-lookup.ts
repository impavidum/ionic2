import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the VinLookup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vin-lookup',
  templateUrl: 'vin-lookup.html'
})
export class VinLookup {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello VinLookup Page');
  }

}
