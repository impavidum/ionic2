import {
    Component
} from '@angular/core';
import {
    NavController,
    NavParams
} from 'ionic-angular';

// Providers
import {
    DriversLog
} from '../../providers/drivers-log';

// echarts
import * as echarts from '../../assets/echarts/echarts'

/*
  Generated class for the DrivingLog page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-driving-log',
    templateUrl: 'driving-log.html'
})

export class DrivingLog {

    constructor(public navCtrl: NavController, private params: NavParams) {
        this.log = params.data;

        //        this.Log = params.log;
    }

    ngOnInit() {

        // Create Chart
        let basic_lines = echarts.default.init(document.getElementById('line-chart'));

        // Chart Options
        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var data = [Math.random() * 300];

        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        let option = {
            title: {
                show: false,
            },
            tooltip: {
                show: false,
                trigger: 'axis'
            },

            grid: {
                left: '3%',
                right: '5%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['0:30', '1:00', '1:30', '2: 00', '2:30', '3:00', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00'],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
        }
    ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
        }
    ],
            series: [
                {
                    name: 'Speed',
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#e7e7e7'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: '#34314c'
                        }
                    },
                    data: [30, 32, 38, 45, 39, 50, 55, 59, 51, 40, 35, 46, 47, 53, 55]
        }
    ]
        };

        // Build Chart
        basic_lines.setOption(option);

    }

    ionViewDidLoad() {


    }

}
