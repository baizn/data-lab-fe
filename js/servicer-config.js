var sexoption = {
        series: [
            {
                type:'pie',
                radius: ['60%', '90%'],
                legendHoverLink:false,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                              '#f7ab50','#f6595e'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data:[
                    {value:45, name:'女'},
                    {value:55, name:'男', selected:true}
                ]
            }
        ]
    };

    var pinChart = echarts.init(document.getElementById('sex-bar'));
    pinChart.setOption(sexoption);

var ageoption = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['70后','80后','90后','60后']
    },
    series: [
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#ffecaa','#ffd1a4','#ffc8ac','#feb1a8'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: [10, 10, 10, 10]
        },
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#ffc75c','#ffb66e','#ffa854','#fc9e92'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: [10, 10, 10, 10]
        },
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#fb8878','#ffa64f','#ffb38d','#fb8878'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: [0, 7, 10, 10]
        },
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#fa7462','#ff935d','#ff925c','#fa7462'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: [0, 0, 10, 10]
        },
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#f9634e','#ff935d','#ff874d','#f9634e'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: [0, 0, 10, 10]
        },
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#f85944','#ff935d','#ffa854','#f85944'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: [0, 0, 10, 10]
        }
    ]
};
debugger

    var ageChart = echarts.init(document.getElementById('age-bar'));
    ageChart.setOption(ageoption);