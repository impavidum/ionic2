import {
    Injectable
} from '@angular/core';
import {
    Http
} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DriversList provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DriversList {

    constructor(public http: Http) {
        this.drivers = [{
                "name": "Kenneth Bone",
                "avatar": "http://getmybuzzup.com/wp-content/uploads/2016/10/who-is-ken-bone-from-the-presidential-debate-whats-trending-now-youtube-thumbnail-1024x576-600x576.jpg",
                "company": "Badass, Inc",
                "avg_score": 100
    }, {
                "name": "Victor Austin",
                "avatar": "https://randomuser.me/api/portraits/men/24.jpg",
                "company": "Roob-Macejkovic",
                "avg_score": 85
    },
            {
                "name": "Peter Carroll",
                "avatar": "https://randomuser.me/api/portraits/men/91.jpg",
                "company": "Reichert Inc",
                "avg_score": 80
    },
            {
                "name": "Julia Ramirez",
                "avatar": "https://randomuser.me/api/portraits/women/52.jpg",
                "company": "Rippin-Franecki",
                "avg_score": 75
    },
            {
                "name": "Kathy Murphy",
                "avatar": "https://randomuser.me/api/portraits/women/59.jpg",
                "company": "Harvey LLC",
                "avg_score": 66
    },
            {
                "name": "Douglas Andrews",
                "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
                "company": "Russel and Sons",
                "avg_score": 45
    },

            {
                "name": "Margaret Morales",
                "avatar": "https://randomuser.me/api/portraits/women/5.jpg",
                "company": "Goldner, Pouros and Corwin",
                "avg_score": 34
    },
            {
                "name": "Jane Gomez",
                "avatar": "https://randomuser.me/api/portraits/women/6.jpg",
                "company": "Gulgowski-Hegmann",
                "avg_score": 27
    },
            {
                "name": "Jessica Rogers",
                "avatar": "https://randomuser.me/api/portraits/women/7.jpg",
                "company": "Reichert, Schneider and Gutkowski",
                "avg_score": 74
    },
            {
                "name": "Rose Davis",
                "avatar": "https://randomuser.me/api/portraits/women/8.jpg",
                "company": "Pollich, Raynor and Robel",
                "avg_score": 59
    },
            {
                "name": "Evelyn George",
                "avatar": "https://randomuser.me/api/portraits/women/9.jpg",
                "company": "Toy-Schowalter",
                "avg_score": 49
    },
            {
                "name": "Helen Phillips",
                "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
                "company": "Mraz, Stark and Zemlak",
                "avg_score": 46
    },
            {
                "name": "Rebecca Thompson",
                "avatar": "https://randomuser.me/api/portraits/women/11.jpg",
                "company": "Maggio, Flatley and DuBuque",
                "avg_score": 41
    },
            {
                "name": "Bruce Howard",
                "avatar": "https://randomuser.me/api/portraits/men/6.jpg",
                "company": "Bogan-Koelpin",
                "avg_score": 63
    },
            {
                "name": "Melissa Ross",
                "avatar": "https://randomuser.me/api/portraits/women/15.jpg",
                "company": "Brekke Group",
                "avg_score": 72
    },
            {
                "name": "Phyllis Murphy",
                "avatar": "https://randomuser.me/api/portraits/women/16.jpg",
                "company": "Lebsack, Okuneva and Mayert",
                "avg_score": 41
    },
            {
                "name": "Mark Watson",
                "avatar": "https://randomuser.me/api/portraits/men/7.jpg",
                "company": "Dibbert, Goyette and Miller",
                "avg_score": 85
    },
            {
                "name": "Jessica Phillips",
                "avatar": "https://randomuser.me/api/portraits/women/17.jpg",
                "company": "Bosco, Mayer and Gutkowski",
                "avg_score": 95
    },
            {
                "name": "Martin Kim",
                "avatar": "https://randomuser.me/api/portraits/men/8.jpg",
                "company": "O'Connell Inc",
                "avg_score": 70
    },
            {
                "name": "Louis Mendoza",
                "avatar": "https://randomuser.me/api/portraits/men/9.jpg",
                "company": "Osinski-Lakin",
                "avg_score": 66
    }];
    }

}
