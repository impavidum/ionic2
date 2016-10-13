import {
    Injectable
} from '@angular/core';

import {
    Http
} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DriversLog provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DriversLog {

    constructor(public http: Http) {
        this.octoberLog = [
            {
                "start": "34 Hazelcrest Lane",
                "end": "7981 Division Terrace",
                "score": 92,
                "time": 39,
                "date": "2016-10-12T10:58:21Z"
    },
            {
                "start": "0254 Memorial Avenue",
                "end": "26 Dawn Terrace",
                "score": 73,
                "time": 52,
                "date": "2016-10-10T00:00:02Z"
    },
            {
                "start": "05 Vermont Alley",
                "end": "9155 Evergreen Crossing",
                "score": 71,
                "time": 57,
                "date": "2016-10-09T13:01:38Z"
    },
            {
                "start": "33970 Fairview Drive",
                "end": "2130 Maywood Street",
                "score": 49,
                "time": 28,
                "date": "2016-10-04T00:07:23Z"
    },
            {
                "start": "9141 Blackbird Hill",
                "end": "4 Del Mar Avenue",
                "score": 46,
                "time": 26,
                "date": "2016-10-03T06:03:46Z"
    },
            {
                "start": "1249 East Pass",
                "end": "7 Grim Street",
                "score": 85,
                "time": 52,
                "date": "2016-10-01T11:10:39Z"
    }];

        this.septemberLog = [{
                "start": "2849 Barnett Plaza",
                "end": "26 Moose Park",
                "score": 80,
                "time": 30,
                "date": "2016-09-30T09:31:17Z"
    },
            {
                "start": "42904 Dahle Point",
                "end": "2 Mendota Center",
                "score": 62,
                "time": 39,
                "date": "2016-09-28T05:19:17Z"
    },
            {
                "start": "07 Farragut Trail",
                "end": "7 4th Alley",
                "score": 39,
                "time": 21,
                "date": "2016-09-27T12:34:43Z"
    },
            {
                "start": "8409 Pawling Avenue",
                "end": "2 Oak Valley Terrace",
                "score": 42,
                "time": 57,
                "date": "2016-09-24T22:18:26Z"
    },
            {
                "start": "24 Esker Place",
                "end": "065 Westridge Center",
                "score": 81,
                "time": 6,
                "date": "2016-09-23T13:12:49Z"
    },
            {
                "start": "0465 Southridge Terrace",
                "end": "50 Kings Crossing",
                "score": 37,
                "time": 46,
                "date": "2016-09-22T23:39:29Z"
    },
            {
                "start": "25 Kennedy Place",
                "end": "7666 Fulton Way",
                "score": 52,
                "time": 20,
                "date": "2016-09-20T09:58:45Z"
    },
            {
                "start": "15 Mifflin Junction",
                "end": "4042 Dunning Street",
                "score": 52,
                "time": 55,
                "date": "2016-09-19T12:20:36Z"
    },
            {
                "start": "59282 Talisman Junction",
                "end": "186 Pawling Hill",
                "score": 49,
                "time": 50,
                "date": "2016-09-18T20:18:48Z"
    },
            {
                "start": "198 Bonner Street",
                "end": "56953 Veith Drive",
                "score": 76,
                "time": 30,
                "date": "2016-09-16T11:19:44Z"
    },
            {
                "start": "08750 Hermina Circle",
                "end": "26475 Lunder Street",
                "score": 96,
                "time": 20,
                "date": "2016-09-14T08:21:46Z"
    },
            {
                "start": "72390 La Follette Parkway",
                "end": "1951 Holy Cross Lane",
                "score": 46,
                "time": 55,
                "date": "2016-09-10T15:12:39Z"
    },
            {
                "start": "6 Morrow Center",
                "end": "237 Melody Parkway",
                "score": 65,
                "time": 6,
                "date": "2016-09-08T17:50:33Z"
    },
            {
                "start": "8788 Prairieview Plaza",
                "end": "11 Merry Place",
                "score": 36,
                "time": 5,
                "date": "2016-09-06T18:34:30Z"
    },
            {
                "start": "67 Moland Circle",
                "end": "9 Canary Lane",
                "score": 56,
                "time": 29,
                "date": "2016-09-02T15:41:05Z"
    },
            {
                "start": "8688 Bluejay Place",
                "end": "93 Pearson Court",
                "score": 61,
                "time": 44,
                "date": "2016-09-01T17:46:23Z"
    }];


    }



}
