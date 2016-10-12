import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the VehiclePhotos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vehicle-photos',
  templateUrl: 'vehicle-photos.html'
})
export class VehiclePhotos {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello VehiclePhotos Page');
  }

}
