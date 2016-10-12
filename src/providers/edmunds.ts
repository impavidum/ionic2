import {
    Injectable
} from '@angular/core';

import {
    Http,
    RequestOptions,
    Headers
} from '@angular/http';


//import {} from 'angular2/http';
import 'rxjs/add/operator/map';

/*
Fleetio Demo - Public
Key: 3vv9n5g984xj6zgzq6ktedtz
Secret: MYFXuGvDcTYQhJEUqXdkS49t

Fleetio Demo - Exploratory
Key: adqrqkfj733axe6wt3tn3xdf
Secret: gxXsBDdAf7r2ZbQ8nUKuGTxB

*/

@Injectable()
export class Edmunds {

    // Constructor function
    constructor(public http: Http) {
        this.publicKey = '3vv9n5g984xj6zgzq6ktedtz';
        this.publicSecret = 'MYFXuGvDcTYQhJEUqXdkS49t';

        this.exploratoryKey = 'adqrqkfj733axe6wt3tn3xdf';
        this.exploratorySecret = 'gxXsBDdAf7r2ZbQ8nUKuGTxB';
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
            this.http.get('http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=' + this.publicKey)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    // Returns Style ID given Make/Model/Year
    getByStyleId(styleId) {
        //        let [make, model, year] = options;
        console.log(styleId);
        //        let params = Object.assign({}, options);
        // Already loaded data
        //        if (this.data) {
        //            return Promise.resolve(this.data);
        //        }

        // Don't have the data yet
        return new Promise(resolve => {
            /*
                Using Angular HTTP provider to request the data,
                then on the response, it'll map the JSON data to a parsed JS object.
                Next, we process the data and resolve the promise with the new data.
            */
            console.log(styleId);
            this.http.get('https://api.edmunds.com/api/inventory/v2/inventories?zipcode=90404&fmt=json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    getVehicleDetail(vehicleDetails) {
        let {
            year,
            make,
            model
        } = vehicleDetails;

        // Don't have the data yet
        return new Promise(resolve => {
            /*
                Using Angular HTTP provider to request the data,
                then on the response, it'll map the JSON data to a parsed JS object.
                Next, we process the data and resolve the promise with the new data.
            */
            this.http.get('https://api.edmunds.com/api/vehicle/v2/' + make + '/' + model + '/' + year + '/styles?view=full&fmt=json&api_key=' + this.publicKey)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    getPhotoByStyleId(styleId) {

        // Don't have the data yet
        return new Promise(resolve => {
            /*
                Using Angular HTTP provider to request the data,
                then on the response, it'll map the JSON data to a parsed JS object.
                Next, we process the data and resolve the promise with the new data.
            */
            this.http.get('https://api.edmunds.com/api/media/v2/styles/' + styleId + '/photos?api_key=' + this.exploratoryKey + '&fmt=json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }


    // Returns Access Token from Edmunds
    getAccessToken() {

        // Don't have the data yet
        return new Promise(resolve => {
            /*
                Using Angular HTTP provider to request the data,
                then on the response, it'll map the JSON data to a parsed JS object.
                Next, we process the data and resolve the promise with the new data.
            */


            let body = JSON.stringify({});
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            let options = new RequestOptions({
                headers: headers
            });
            //
            //return this.http.post(url, body, options)
            //                .map(res =>  res.json().data)
            //                .catch(this.handleError)

            this.http.post('https://api.edmunds.com/inventory/token?client_id=b5bfavyby2kzy3x5up7b9ucg &client_secret=n4PV4b5RJwRUYjZ5VETYh2Cq&grant_type=client_credentials', {}, options)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
            //            this.http.get('https://api.edmunds.com/inventory/token?client_id=y42cz4xvvfrazaryyvpsd6g6&client_secret=FkTnANvGvYXK3ctDvDkpESCw&grant_type=client_credentials')
            //                .map(res => res.json())
            //                .subscribe(data => {
            //                    this.data = data;
            //                    resolve(this.data);
            //                });

            /*
            ApplicationEdmunds Demo Key: b5bfavyby2kzy3x5up7b9ucg Secret: n4PV4b5RJwRUYjZ5VETYh2Cq
            */
        });
    }



}
