import {
    Component
} from '@angular/core';

import {
    HomePage
} from '../home/home';
import {
    MakeLookup
} from '../make-lookup/make-lookup';
import {
    VinLookup
} from '../vin-lookup/vin-lookup';
import {
    Drivers
} from '../drivers/drivers';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = HomePage;
    tab2Root: any = MakeLookup;
    tab3Root: any = VinLookup;
    tab4Root: any = Drivers;

    constructor() {

    }
}
