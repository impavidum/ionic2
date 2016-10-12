import {
    NgModule
} from '@angular/core';
import {
    IonicApp,
    IonicModule
} from 'ionic-angular';
import {
    MyApp
} from './app.component';


// Pages
import {
    AboutPage
} from '../pages/about/about';
import {
    ContactPage
} from '../pages/contact/contact';
import {
    HomePage
} from '../pages/home/home';
import {
    TabsPage
} from '../pages/tabs/tabs';
import {
    MakeLookup
} from '../pages/make-lookup/make-lookup';
import {
    ModelLookup
} from '../pages/model-lookup/model-lookup';
import {
    YearLookup
} from '../pages/year-lookup/year-lookup';
import {
    VinLookup
} from '../pages/vin-lookup/vin-lookup';
import {
    VehicleDetail
} from '../pages/vehicle-detail/vehicle-detail';

import {
    DrivingLog
} from '../pages/driving-log/driving-log';

// Pipes
import {
    FilterPipe
} from '../pipes/filter.pipe';

@NgModule({
    declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MakeLookup,
    VinLookup,
    ModelLookup,
    YearLookup,
    FilterPipe,
    VehicleDetail,
    DrivingLog
  ],
    imports: [
    IonicModule.forRoot(MyApp)
  ],
    bootstrap: [IonicApp],
    entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MakeLookup,
    VinLookup,
    ModelLookup,
    YearLookup,
    VehicleDetail,
    DrivingLog
  ],
    providers: [],
})
export class AppModule {}
