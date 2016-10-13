import {
    Component
} from '@angular/core';
import {
    Platform
} from 'ionic-angular';
import {
    StatusBar
} from 'ionic-native';
//import { HTTP_PROVIDERS } from '@angular2/http';

// Providers
import {
    Edmunds
} from '../providers/edmunds';

import {
    DriversList
} from '../providers/drivers-list';

import {
    DriversLog
} from '../providers/drivers-log';

// Pages
import {
    TabsPage
} from '../pages/tabs/tabs';


@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`,
    providers: [Edmunds, DriversList, DriversLog]
})
export class MyApp {
    rootPage = TabsPage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}
