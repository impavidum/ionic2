import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
    Edmunds API Service

    App: Fleetio Demo
    Key: y42cz4xvvfrazaryyvpsd6g6
    Secret: FkTnANvGvYXK3ctDvDkpESCw
*/
@Injectable()
export class Edmunds {

    // Constructor function
    constructor(public http: Http) {

    }

    // Returns a list of Vehicle Makes
    getMakeList() {

        // Already loaded data
        if (this.data) {
            return Promise.resolve(this.data);
        }

        // Don't have the data yet
        return new Promise(resolve => {
            /*
                Using Angular HTTP provider to request the data,
                then on the response, it'll map the JSON data to a parsed JS object.
                Next, we process the data and resolve the promise with the new data.
            */
            this.http.get('http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=y42cz4xvvfrazaryyvpsd6g6')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
      });
    }
}
