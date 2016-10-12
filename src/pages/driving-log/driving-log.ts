import {
    Component
} from '@angular/core';
import {
    NavController,
    NavParams
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

    constructor(public navCtrl: NavController, params: NavParams) {
        console.log(params);
        this.driver = params.data;
    }

    ngOnInit() {

        // Create Chart
        let basic_lines = echarts.default.init(document.getElementById('chart'));

        // Chart Options
        let option = {
            color: ['#34314c'],
            //            tooltip: {
            //                trigger: 'axis',
            //                axisPointer: {
            //                    type: 'shadow'
            //                }
            //            },
            tooltip: {
                show: false
                    //                formatter: function (params) {
                    //                    return '<b>' + params[0].data '</b> on ' + params[0].name;
                    //                },
                    //                trigger: 'axis',
                    //                backgroundColor: 'white',
                    //                textStyle: {
                    //                    color: color.mdgrey
                    //                },
                    //                extraCssText: ' box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);background-color: white;color:' + color.mdgrey + ';font-size: 1.1em;',
                    //                axisPointer: {
                    //                    type: 'shadow',
                    //                    lineStyle: {
                    //                        color: color.ltgrey,
                    //                        type: 'solid'
                    //                    },
                    //                    crossStyle: {
                    //                        color: '#27727B'
                    //                    },
                    //                    shadowStyle: {
                    //                        color: 'rgba(200,200,200,0.3)'
                    //                    }
                    //                }
            },
            grid: {
                left: '0',
                top: '0',
                right: '0',
                bottom: '32',
                containLabel: false
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true,
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: ['red']
                        }

                    },
                    axisLine: {
                        show: false
                    }

                        }
                    ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            color: ['#e7e7e7']
                        }

                    },
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
                    name: 'Driving Quality',
                    type: 'bar',
                    animationDelay: function (idx) {
                        return idx * 100;
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTop',
                            formatter: function (params) {
                                if (!params.data) {
                                    return '-';
                                } else if (params.data > 79) {
                                    return 'A';
                                } else if (params.data > 59) {
                                    return 'B';
                                } else if (params.data > 39) {
                                    return 'C';
                                } else if (params.data > 19) {
                                    return 'D';
                                } else {
                                    return 'F';
                                }
                            }
                        }
                    },
                    barWidth: '60%',
                    data: [38, 57, 75, 69, 90, 75, 95]
                        }
                    ]
        };

        // Build Chart
        basic_lines.setOption(option);

    }

    ionViewDidLoad() {


    }

}
