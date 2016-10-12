import {
    Component
} from '@angular/core';
import {
    NavController
} from 'ionic-angular';


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

    constructor(public navCtrl: NavController) {

    }

    ngOnInit() {
        //        var echarts = echarts.default;
        console.log(echarts)

        let basic_lines = echarts.default.init(document.getElementById('chart'));

        let option = {
            color: ['#34314c'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '0%',
                top: '0%',
                right: '0%',
                bottom: '10%',
                containLabel: false
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true,
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
                    },
                    axisLabel: {
                        show: false
                    },
                    max: 100
                        }
                    ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [50, 85, 75, 60, 90, 75, 95]
                        }
                    ]
        };


        basic_lines.setOption(option);
    }

    ionViewDidLoad() {
        //        var echarts = echarts.default;
        //        console.log(echarts);
        //        setTimeout(function () {
        //            let basic_lines = echarts.init(document.getElementById('#chart'));
        //

        //        }, 2000)

    }

}
