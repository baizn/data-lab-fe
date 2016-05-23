
//define(function(require, exports, module) {

	var pins = [

	];

	

	var pinoption = {
	    tooltip: {
	        trigger: 'item',
	        //position: [20, 20],
	        backgroundColor: '#2aa7e8',
	        textStyle: {
	        	color: '#fff',
	        	fontFamily: 'simsun, serif',

	        },
	        formatter: function(params) {
	        	console.log(params)
	        	return '<span>' + params.name + '</span>: <span style="font-size: 18px; font-family: arial;">' + params.value + '</span>';
	        }//"{b}: {c}"
	    },
	    legend: {
	        orient: 'vertical',
	        //show: true,
	        x: 'left',
	        data:[]
	    },
	    series: [
	        {
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '20%'],


	            label: {
	                normal: {		
	                	show: true,
	                    position: 'center',
	                    textStyle: {
	                    	color: '#fff'
	                    }
	                }
	            },
	            itemStyle: {
	            	normal: {
	            		color: '#ff6600'
	            	}
	            },
	            data:[
	                {value:1548, name:'企业取名'}
	            ]
	        },
	        {
	            type:'pie',
	            radius: ['20%', '40%'],
	            label: {
	            	normal: {
	            		show: false
	            	}
	            },
	            // labelLine: {
	            // 	normal: {
	            // 		show: true,
	            // 		length: 150,
	            // 		//length2: 40,
	            // 		// width: 3,
	            // 		lineStyle: {
	            // 			color: '#ffb07c'
	            // 		}
	            // 	},
	            // 	emphasis: {
	            // 		lineStyle: {
	            // 			color: '#ff8e43'
	            // 		}
	            // 	}
	            // },
	            // zlevel: 4,
	            itemStyle: {
	            	normal: {
	            		color: '#ff8e43'
	            	}
	            },
	            
	            data:[
	                {value:335, name:'品牌设计'}
	            ]
	        },
	        {
	            type:'pie',
	            radius: ['40%', '60%'],
	            label: {
	            	normal: {
	            		show: false
	            	}
	            },
	            // labelLine: {
	            // 	normal: {
	            // 		show: true,
	            // 		length: 100,
	            // 		//length2: 40,
	            // 		// width: 3,
	            // 		lineStyle: {
	            // 			color: '#ffb07c'
	            // 		}
	            // 	},
	            // 	emphasis: {
	            // 		lineStyle: {
	            // 			color: '#ff8e43'
	            // 		}
	            // 	}
	            // },
	            // zlevel: 3,
	            itemStyle: {
	            	normal: {
	            		color: '#ffb07c'
	            	}
	            },
	            data:[
	                {value:335, name:'公司建立'}
	            ]
	        },
	        {
	            type:'pie',
	            radius: ['60%', '80%'],
	            label: {
	            	normal: {
	            		show: false
	            	}
	            },
	            // labelLine: {
	            // 	normal: {
	            // 		show: true,
	            // 		//length: 80,
	            // 		//length2: 40,
	            // 		// width: 3,
	            // 		lineStyle: {
	            // 			color: '#ffb07c'
	            // 		}
	            // 	},
	            // 	emphasis: {
	            // 		lineStyle: {
	            // 			color: '#ff8e43'
	            // 		}
	            // 	}
	            // },
	            // zlevel: 2,
	            itemStyle: {
	            	normal: {
	            		color: '#ffcdac'
	            	}
	            },
	            data:[
	                {value:335, name:'品牌保护'}
	            ]
	        },
	        {
	            type:'pie',
	            radius: ['80%', '100%'],
	            label: {
	            	normal: {
	            		show: false
	            	}
	            },
	            // labelLine: {
	            // 	normal: {
	            // 		show: true,
	            // 		//length: 50,
	            // 		//length2: 40,
	            // 		// width: 3,
	            // 		lineStyle: {
	            // 			color: '#ffb07c'
	            // 		}
	            // 	},
	            // 	emphasis: {
	            // 		lineStyle: {
	            // 			color: '#ff8e43'
	            // 		}
	            // 	}
	            // },
	            // zlevel: 1,
	            itemStyle: {
	            	normal: {
	            		color: '#ffe4da'
	            	}
	            },
	            hoverAnimation: false,
	            data:[
	                {value:335, name:'品牌推广'}
	            ]
	        }
	    ]
	};

	var pinChart = echarts.init(document.getElementById('content-pin'));
	pinChart.setOption(pinoption);

	/**-----------------------------------------------------------------------------------*/

	var geoCoordMap = {
	    '上海': [121.4648,31.2891],
	    '东莞': [113.8953,22.901],
	    '东营': [118.7073,37.5513],
	    '中山': [113.4229,22.478],
	    '临汾': [111.4783,36.1615],
	    '临沂': [118.3118,35.2936],
	    '丹东': [124.541,40.4242],
	    '丽水': [119.5642,28.1854],
	    '乌鲁木齐': [87.9236,43.5883],
	    '佛山': [112.8955,23.1097],
	    '保定': [115.0488,39.0948],
	    '兰州': [103.5901,36.3043],
	    '包头': [110.3467,41.4899],
	    '北京': [116.4551,40.2539],
	    '北海': [109.314,21.6211],
	    '南京': [118.8062,31.9208],
	    '南宁': [108.479,23.1152],
	    '南昌': [116.0046,28.6633],
	    '南通': [121.1023,32.1625],
	    '厦门': [118.1689,24.6478],
	    '台州': [121.1353,28.6688],
	    '合肥': [117.29,32.0581],
	    '呼和浩特': [111.4124,40.4901],
	    '咸阳': [108.4131,34.8706],
	    '哈尔滨': [127.9688,45.368],
	    '唐山': [118.4766,39.6826],
	    '嘉兴': [120.9155,30.6354],
	    '大同': [113.7854,39.8035],
	    '大连': [122.2229,39.4409],
	    '天津': [117.4219,39.4189],
	    '太原': [112.3352,37.9413],
	    '威海': [121.9482,37.1393],
	    '宁波': [121.5967,29.6466],
	    '宝鸡': [107.1826,34.3433],
	    '宿迁': [118.5535,33.7775],
	    '常州': [119.4543,31.5582],
	    '广州': [113.5107,23.2196],
	    '廊坊': [116.521,39.0509],
	    '延安': [109.1052,36.4252],
	    '张家口': [115.1477,40.8527],
	    '徐州': [117.5208,34.3268],
	    '德州': [116.6858,37.2107],
	    '惠州': [114.6204,23.1647],
	    '成都': [103.9526,30.7617],
	    '扬州': [119.4653,32.8162],
	    '承德': [117.5757,41.4075],
	    '拉萨': [91.1865,30.1465],
	    '无锡': [120.3442,31.5527],
	    '日照': [119.2786,35.5023],
	    '昆明': [102.9199,25.4663],
	    '杭州': [119.5313,29.8773],
	    '枣庄': [117.323,34.8926],
	    '柳州': [109.3799,24.9774],
	    '株洲': [113.5327,27.0319],
	    '武汉': [114.3896,30.6628],
	    '汕头': [117.1692,23.3405],
	    '江门': [112.6318,22.1484],
	    '沈阳': [123.1238,42.1216],
	    '沧州': [116.8286,38.2104],
	    '河源': [114.917,23.9722],
	    '泉州': [118.3228,25.1147],
	    '泰安': [117.0264,36.0516],
	    '泰州': [120.0586,32.5525],
	    '济南': [117.1582,36.8701],
	    '济宁': [116.8286,35.3375],
	    '海口': [110.3893,19.8516],
	    '淄博': [118.0371,36.6064],
	    '淮安': [118.927,33.4039],
	    '深圳': [114.5435,22.5439],
	    '清远': [112.9175,24.3292],
	    '温州': [120.498,27.8119],
	    '渭南': [109.7864,35.0299],
	    '湖州': [119.8608,30.7782],
	    '湘潭': [112.5439,27.7075],
	    '滨州': [117.8174,37.4963],
	    '潍坊': [119.0918,36.524],
	    '烟台': [120.7397,37.5128],
	    '玉溪': [101.9312,23.8898],
	    '珠海': [113.7305,22.1155],
	    '盐城': [120.2234,33.5577],
	    '盘锦': [121.9482,41.0449],
	    '石家庄': [114.4995,38.1006],
	    '福州': [119.4543,25.9222],
	    '秦皇岛': [119.2126,40.0232],
	    '绍兴': [120.564,29.7565],
	    '聊城': [115.9167,36.4032],
	    '肇庆': [112.1265,23.5822],
	    '舟山': [122.2559,30.2234],
	    '苏州': [120.6519,31.3989],
	    '莱芜': [117.6526,36.2714],
	    '菏泽': [115.6201,35.2057],
	    '营口': [122.4316,40.4297],
	    '葫芦岛': [120.1575,40.578],
	    '衡水': [115.8838,37.7161],
	    '衢州': [118.6853,28.8666],
	    '西宁': [101.4038,36.8207],
	    '西安': [109.1162,34.2004],
	    '贵阳': [106.6992,26.7682],
	    '连云港': [119.1248,34.552],
	    '邢台': [114.8071,37.2821],
	    '邯郸': [114.4775,36.535],
	    '郑州': [113.4668,34.6234],
	    '鄂尔多斯': [108.9734,39.2487],
	    '重庆': [107.7539,30.1904],
	    '金华': [120.0037,29.1028],
	    '铜川': [109.0393,35.1947],
	    '银川': [106.3586,38.1775],
	    '镇江': [119.4763,31.9702],
	    '长春': [125.8154,44.2584],
	    '长沙': [113.0823,28.2568],
	    '长治': [112.8625,36.4746],
	    '阳泉': [113.4778,38.0951],
	    '青岛': [120.4651,36.3373],
	    '韶关': [113.7964,24.7028],
	    '湛江': [110.35, 21.27],
	    '衡阳': [112.39, 26.98],
	    '遵义': [106.9, 27.7],
	    '六安': [116.49, 31.73]
	};

	var CQData = [
	    [{name:'重庆'}, {name:'重庆',value:19.89}],
		       [{name:'重庆'}, {name:'重庆',value:19.89}],
		       [{name:'重庆'}, {name:'北京',value:8.81}],
		       [{name:'重庆'}, {name:'上海',value:6.27}],
		       [{name:'重庆'}, {name:'深圳',value:3.57}],
		       [{name:'重庆'}, {name:'天津',value:2.46}],
		       [{name:'重庆'}, {name:'广州',value:2.29}],
		       [{name:'重庆'}, {name:'成都',value:2.19}],
		       [{name:'重庆'}, {name:'杭州',value:2}],
		       [{name:'重庆'}, {name:'贵阳',value:1.34}],
		       [{name:'重庆'}, {name:'温州',value:1.09}]
	];

	// var SHData = [
	//     [{name:'上海'},{name:'包头',value:95}],
	//     [{name:'上海'},{name:'昆明',value:90}],
	//     [{name:'上海'},{name:'广州',value:80}],
	//     [{name:'上海'},{name:'郑州',value:70}],
	//     [{name:'上海'},{name:'长春',value:60}],
	//     [{name:'上海'},{name:'重庆',value:50}],
	//     [{name:'上海'},{name:'长沙',value:40}],
	//     [{name:'上海'},{name:'北京',value:30}],
	//     [{name:'上海'},{name:'丹东',value:20}],
	//     [{name:'上海'},{name:'大连',value:10}]
	// ];

	// var GZData = [
	//     [{name:'广州'},{name:'福州',value:95}],
	//     [{name:'广州'},{name:'太原',value:90}],
	//     [{name:'广州'},{name:'长春',value:80}],
	//     [{name:'广州'},{name:'重庆',value:70}],
	//     [{name:'广州'},{name:'西安',value:60}],
	//     [{name:'广州'},{name:'成都',value:50}],
	//     [{name:'广州'},{name:'常州',value:40}],
	//     [{name:'广州'},{name:'北京',value:30}],
	//     [{name:'广州'},{name:'北海',value:20}],
	//     [{name:'广州'},{name:'海口',value:10}]
	// ];

	var areaData = [
		['重庆', 
			[
		       [{name:'重庆'}, {name:'重庆',value:19.89}],
		       [{name:'重庆'}, {name:'北京',value:8.81}],
		       [{name:'重庆'}, {name:'上海',value:6.27}],
		       [{name:'重庆'}, {name:'深圳',value:3.57}],
		       [{name:'重庆'}, {name:'天津',value:2.46}],
		       [{name:'重庆'}, {name:'广州',value:2.29}],
		       [{name:'重庆'}, {name:'成都',value:2.19}],
		       [{name:'重庆'}, {name:'杭州',value:2}],
		       [{name:'重庆'}, {name:'贵阳',value:1.34}],
		       [{name:'重庆'}, {name:'温州',value:1.09}]
			],
			['重庆', '北京', '上海', '深圳', '天津']
		], 
		['北京', 
			[
		       [{name:'北京'}, {name:'北京',value:22.72}],
		       [{name:'北京'}, {name:'重庆',value:7.36}],
		       [{name:'北京'}, {name:'上海',value:4.11}],
		       [{name:'北京'}, {name:'深圳',value:3.28}],
		       [{name:'北京'}, {name:'天津',value:2.39}],
		       [{name:'北京'}, {name:'广州',value:2.32}],
		       [{name:'北京'}, {name:'杭州',value:1.9}],
		       [{name:'北京'}, {name:'济南',value:1.58}],
		       [{name:'北京'}, {name:'西安',value:1.42}],
		       [{name:'北京'}, {name:'成都',value:1.08}]
			],
			['北京', '重庆', '上海', '深圳', '天津']
		], 
		['深圳', 
			[			   
		       [{name:'深圳'}, {name:'深圳',value:12.96}],
		       [{name:'深圳'}, {name:'北京',value:6.54}],
		       [{name:'深圳'}, {name:'上海',value:4.48}],
		       [{name:'深圳'}, {name:'重庆',value:3.28}],
		       [{name:'深圳'}, {name:'广州',value:2.89}],
		       [{name:'深圳'}, {name:'杭州',value:1.56}],
		       [{name:'深圳'}, {name:'武汉',value:1.43}],
		       [{name:'深圳'}, {name:'东莞',value:1.42}],
		       [{name:'深圳'}, {name:'苏州',value:1.29}],
		       [{name:'深圳'}, {name:'成都',value:1.12}],
		       [{name:'深圳'}, {name:'长沙',value:1.09}]
			],
			['深圳', '北京', '上海', '重庆', '广州']
		], 
		['广州', 
			[				   
		       [{name:'广州'}, {name:'广州',value:7.07}],
		       [{name:'广州'}, {name:'上海',value:5.8}],
		       [{name:'广州'}, {name:'北京',value:5.52}],
		       [{name:'广州'}, {name:'深圳',value:4.85}],
		       [{name:'广州'}, {name:'重庆',value:4.24}],
		       [{name:'广州'}, {name:'杭州',value:2.02}],
		       [{name:'广州'}, {name:'东莞',value:1.8}],
		       [{name:'广州'}, {name:'湛江',value:1.55}],
		       [{name:'广州'}, {name:'天津',value:0.99}],
		       [{name:'广州'}, {name:'西安',value:0.97}]
			],
			['广州', '上海', '北京', '深圳', '重庆']
		], 
		['成都', 
			[			   
		       [{name:'成都'}, {name:'成都',value:9.7}],
		       [{name:'成都'}, {name:'上海',value:5.04}],
		       [{name:'成都'}, {name:'北京',value:4.85}],
		       [{name:'成都'}, {name:'深圳',value:2.76}],
		       [{name:'成都'}, {name:'重庆',value:2.58}],
		       [{name:'成都'}, {name:'广州',value:2.43}],
		       [{name:'成都'}, {name:'杭州',value:1.62}],
		       [{name:'成都'}, {name:'天津',value:1.02}],
		       [{name:'成都'}, {name:'苏州',value:0.93}],
		       [{name:'成都'}, {name:'六安',value:0.93}]
			],
			['成都', '上海', '北京', '深圳', '重庆']
		], 
		['天津', 
			[			   
		       [{name:'天津'}, {name:'北京',value:5.56}],
		       [{name:'天津'}, {name:'天津',value:4.1}],
		       [{name:'天津'}, {name:'上海',value:2.44}],
		       [{name:'天津'}, {name:'重庆',value:1.94}],
		       [{name:'天津'}, {name:'深圳',value:1.67}],
		       [{name:'天津'}, {name:'成都',value:1.15}],
		       [{name:'天津'}, {name:'苏州',value:0.98}],
		       [{name:'天津'}, {name:'广州',value:0.95}],
		       [{name:'天津'}, {name:'杭州',value:0.67}],
		       [{name:'天津'}, {name:'长沙',value:0.66}]
			],
			['北京', '天津', '上海', '重庆', '深圳']
		], 
		['南昌', 
			[				   			   
		       [{name:'南昌'}, {name:'南昌',value:4.07}],
		       [{name:'南昌'}, {name:'上海',value:3.17}],
		       [{name:'南昌'}, {name:'北京',value:2.99}],
		       [{name:'南昌'}, {name:'深圳',value:1.7}],
		       [{name:'南昌'}, {name:'广州',value:1.56}],
		       [{name:'南昌'}, {name:'武汉',value:1.17}],
		       [{name:'南昌'}, {name:'嘉兴',value:1}],
		       [{name:'南昌'}, {name:'重庆',value:0.84}],
		       [{name:'南昌'}, {name:'杭州',value:0.83}],
		       [{name:'南昌'}, {name:'清远',value:0.78}]
			],
			['南昌', '上海', '北京', '深圳', '广州']
		], 
		['武汉', 
			[				   
		       [{name:'武汉'}, {name:'上海',value:3.62}],
		       [{name:'武汉'}, {name:'北京',value:3.14}],
		       [{name:'武汉'}, {name:'武汉',value:1.81}],
		       [{name:'武汉'}, {name:'深圳',value:1.36}],
		       [{name:'武汉'}, {name:'重庆',value:1.13}],
		       [{name:'武汉'}, {name:'天津',value:0.87}],
		       [{name:'武汉'}, {name:'广州',value:0.82}],
		       [{name:'武汉'}, {name:'杭州',value:0.61}],
		       [{name:'武汉'}, {name:'郑州',value:0.58}],
		       [{name:'武汉'}, {name:'成都',value:0.43}]
			],
			['上海', '北京', '武汉', '深圳', '重庆']
		], 
		['杭州', 
			[				   
		       [{name:'杭州'}, {name:'杭州',value:2.51}],
		       [{name:'杭州'}, {name:'北京',value:1.92}],
		       [{name:'杭州'}, {name:'上海',value:1.62}],
		       [{name:'杭州'}, {name:'天津',value:1.46}],
		       [{name:'杭州'}, {name:'深圳',value:1.22}],
		       [{name:'杭州'}, {name:'重庆',value:1.11}],
		       [{name:'杭州'}, {name:'广州',value:0.99}],
		       [{name:'杭州'}, {name:'温州',value:0.9}],
		       [{name:'杭州'}, {name:'宁波',value:0.79}],
		       [{name:'杭州'}, {name:'金华',value:0.36}]
			],
			['杭州', '北京', '上海', '天津', '深圳']
		], 
		['济南', 
			[				   
		       [{name:'济南'}, {name:'北京',value:2.81}],
		       [{name:'济南'}, {name:'上海',value:1.68}],
		       [{name:'济南'}, {name:'深圳',value:1.24}],
		       [{name:'济南'}, {name:'济南',value:1.07}],
		       [{name:'济南'}, {name:'青岛',value:1.01}],
		       [{name:'济南'}, {name:'广州',value:0.81}],
		       [{name:'济南'}, {name:'杭州',value:0.6}],
		       [{name:'济南'}, {name:'重庆',value:0.57}],
		       [{name:'济南'}, {name:'天津',value:0.41}],
		       [{name:'济南'}, {name:'苏州',value:0.37}]
			],
			['北京', '上海', '深圳', '济南', '青岛']
		], 
		['郑州', 
			[				   
		       [{name:'郑州'}, {name:'北京',value:2.26}],
		       [{name:'郑州'}, {name:'上海',value:2.03}],
		       [{name:'郑州'}, {name:'郑州',value:1.97}],
		       [{name:'郑州'}, {name:'深圳',value:1.1}],
		       [{name:'郑州'}, {name:'重庆',value:0.75}],
		       [{name:'郑州'}, {name:'广州',value:0.71}],
		       [{name:'郑州'}, {name:'杭州',value:0.55}],
		       [{name:'郑州'}, {name:'西安',value:0.45}],
		       [{name:'郑州'}, {name:'天津',value:0.45}],
		       [{name:'郑州'}, {name:'苏州',value:0.33}]
			],
			['北京', '上海', '郑州', '深圳', '重庆']
		], 
		['济南', 
			[				 
		       [{name:'南京'}, {name:'南京',value:3.19}],
		       [{name:'南京'}, {name:'北京',value:1.4}],
		       [{name:'南京'}, {name:'上海',value:1.1}],
		       [{name:'南京'}, {name:'深圳',value:0.88}],
		       [{name:'南京'}, {name:'重庆',value:0.67}],
		       [{name:'南京'}, {name:'广州',value:0.52}],
		       [{name:'南京'}, {name:'杭州',value:0.4}],
		       [{name:'南京'}, {name:'无锡',value:0.38}],
		       [{name:'南京'}, {name:'成都',value:0.34}],
		       [{name:'南京'}, {name:'苏州',value:0.34}]
			],
			['南京', '北京', '上海', '深圳', '重庆']
		], 
		['合肥', 
			[
			   [{name:'合肥'}, {name:'北京',value:2.67}],
		       [{name:'合肥'}, {name:'上海',value:1.76}],
		       [{name:'合肥'}, {name:'深圳',value:1.06}],
		       [{name:'合肥'}, {name:'重庆',value:0.85}],
		       [{name:'合肥'}, {name:'广州',value:0.63}],
		       [{name:'合肥'}, {name:'杭州',value:0.63}],
		       [{name:'合肥'}, {name:'苏州',value:0.49}],
		       [{name:'合肥'}, {name:'合肥',value:0.47}],
		       [{name:'合肥'}, {name:'天津',value:0.43}],
		       [{name:'合肥'}, {name:'郑州',value:0.29}]
			],
			['北京', '上海', '深圳', '重庆', '广州']
		], 
		['长沙', 
			[			   
		       [{name:'长沙'}, {name:'北京',value:1.55}],
		       [{name:'长沙'}, {name:'深圳',value:1.05}],
		       [{name:'长沙'}, {name:'上海',value:0.92}],
		       [{name:'长沙'}, {name:'广州',value:0.59}],
		       [{name:'长沙'}, {name:'杭州',value:0.45}],
		       [{name:'长沙'}, {name:'重庆',value:0.44}],
		       [{name:'长沙'}, {name:'长沙',value:0.43}],
		       [{name:'长沙'}, {name:'成都',value:0.37}],
		       [{name:'长沙'}, {name:'石家庄',value:0.29}],
		       [{name:'长沙'}, {name:'武汉',value:0.25}]
			],
			['北京', '深圳', '上海', '广州', '杭州']
		], 
		['厦门', 
			[			   			   
		       [{name:'厦门'}, {name:'北京',value:1.73}],
		       [{name:'厦门'}, {name:'上海',value:1.29}],
		       [{name:'厦门'}, {name:'厦门',value:0.99}],
		       [{name:'厦门'}, {name:'深圳',value:0.73}],
		       [{name:'厦门'}, {name:'广州',value:0.7}],
		       [{name:'厦门'}, {name:'杭州',value:0.64}],
		       [{name:'厦门'}, {name:'天津',value:0.45}],
		       [{name:'厦门'}, {name:'重庆',value:0.35}],
		       [{name:'厦门'}, {name:'泉州',value:0.33}],
		       [{name:'厦门'}, {name:'成都',value:0.27}]
			],
			['北京', '上海', '厦门', '深圳', '广州']
		], 
		['青岛', 
			[	  			   
		       [{name:'青岛'}, {name:'北京',value:1.29}],
		       [{name:'青岛'}, {name:'上海',value:1.04}],
		       [{name:'青岛'}, {name:'深圳',value:0.8}],
		       [{name:'青岛'}, {name:'重庆',value:0.64}],
		       [{name:'青岛'}, {name:'广州',value:0.37}],
		       [{name:'青岛'}, {name:'青岛',value:0.35}],
		       [{name:'青岛'}, {name:'杭州',value:0.29}],
		       [{name:'青岛'}, {name:'东莞',value:0.28}],
		       [{name:'青岛'}, {name:'天津',value:0.28}],
		       [{name:'青岛'}, {name:'成都',value:0.24}]
			],
			['北京', '上海', '深圳', '重庆', '广州']
		], 
		['西安', 
			[				   
		       [{name:'西安'}, {name:'北京',value:1.51}],
		       [{name:'西安'}, {name:'西安',value:1.26}],
		       [{name:'西安'}, {name:'上海',value:0.79}],
		       [{name:'西安'}, {name:'深圳',value:0.77}],
		       [{name:'西安'}, {name:'重庆',value:0.65}],
		       [{name:'西安'}, {name:'杭州',value:0.49}],
		       [{name:'西安'}, {name:'广州',value:0.39}],
		       [{name:'西安'}, {name:'宁波',value:0.28}],
		       [{name:'西安'}, {name:'廊坊',value:0.2}],
		       [{name:'西安'}, {name:'天津',value:0.19}]
			],
			['北京', '西安', '上海', '深圳', '重庆']
		], 
		['石家庄', 
			[			   			   
		       [{name:'石家庄'}, {name:'北京',value:1.87}],
		       [{name:'石家庄'}, {name:'上海',value:0.9}],
		       [{name:'石家庄'}, {name:'深圳',value:0.69}],
		       [{name:'石家庄'}, {name:'重庆',value:0.49}],
		       [{name:'石家庄'}, {name:'杭州',value:0.35}],
		       [{name:'石家庄'}, {name:'苏州',value:0.33}],
		       [{name:'石家庄'}, {name:'广州',value:0.33}],
		       [{name:'石家庄'}, {name:'石家庄',value:0.29}],
		       [{name:'石家庄'}, {name:'天津',value:0.18}],
		       [{name:'石家庄'}, {name:'温州',value:0.16}]
			],
			['北京', '上海', '深圳', '重庆', '杭州']
		], 
		['沈阳', 
			[			   
		       [{name:'沈阳'}, {name:'北京',value:1.15}],
		       [{name:'沈阳'}, {name:'沈阳',value:0.86}],
		       [{name:'沈阳'}, {name:'上海',value:0.8}],
		       [{name:'沈阳'}, {name:'杭州',value:0.49}],
		       [{name:'沈阳'}, {name:'重庆',value:0.47}],
		       [{name:'沈阳'}, {name:'深圳',value:0.46}],
		       [{name:'沈阳'}, {name:'广州',value:0.29}],
		       [{name:'沈阳'}, {name:'天津',value:0.27}],
		       [{name:'沈阳'}, {name:'成都',value:0.27}],
		       [{name:'沈阳'}, {name:'武汉',value:0.2}]
			],
			['北京', '沈阳', '上海', '杭州', '重庆']
		], 
		['温州', 
			[			   
		       [{name:'温州'}, {name:'北京',value:1.21}],
		       [{name:'温州'}, {name:'上海',value:0.91}],
		       [{name:'温州'}, {name:'深圳',value:0.81}],
		       [{name:'温州'}, {name:'重庆',value:0.44}],
		       [{name:'温州'}, {name:'广州',value:0.44}],
		       [{name:'温州'}, {name:'温州',value:0.43}],
		       [{name:'温州'}, {name:'杭州',value:0.37}],
		       [{name:'温州'}, {name:'天津',value:0.25}],
		       [{name:'温州'}, {name:'东莞',value:0.23}],
		       [{name:'温州'}, {name:'成都',value:0.22}]
			],
			['北京', '上海', '深圳', '重庆', '广州']
		], 
		['淄博', 
			[			   
		       [{name:'淄博'}, {name:'北京',value:1.31}],
		       [{name:'淄博'}, {name:'上海',value:0.87}],
		       [{name:'淄博'}, {name:'深圳',value:0.47}],
		       [{name:'淄博'}, {name:'天津',value:0.42}],
		       [{name:'淄博'}, {name:'淄博',value:0.35}],
		       [{name:'淄博'}, {name:'广州',value:0.34}],
		       [{name:'淄博'}, {name:'青岛',value:0.32}],
		       [{name:'淄博'}, {name:'杭州',value:0.23}],
		       [{name:'淄博'}, {name:'济南',value:0.21}],
		       [{name:'淄博'}, {name:'苏州',value:0.2}]
			],
			['北京', '上海', '深圳', '天津', '淄博']
		], 
		['潍坊', 
			[			   
		       [{name:'潍坊'}, {name:'潍坊',value:1.05}],
		       [{name:'潍坊'}, {name:'北京',value:1.02}],
		       [{name:'潍坊'}, {name:'上海',value:0.68}],
		       [{name:'潍坊'}, {name:'重庆',value:0.43}],
		       [{name:'潍坊'}, {name:'深圳',value:0.39}],
		       [{name:'潍坊'}, {name:'天津',value:0.38}],
		       [{name:'潍坊'}, {name:'广州',value:0.28}],
		       [{name:'潍坊'}, {name:'杭州',value:0.23}],
		       [{name:'潍坊'}, {name:'成都',value:0.16}],
		       [{name:'潍坊'}, {name:'东莞',value:0.15}]
			],
			['潍坊', '北京', '上海', '重庆', '深圳']
		], 
		['福州', 
			[			   
		       [{name:'福州'}, {name:'北京',value:1.22}],
		       [{name:'福州'}, {name:'福州',value:0.73}],
		       [{name:'福州'}, {name:'深圳',value:0.68}],
		       [{name:'福州'}, {name:'重庆',value:0.45}],
		       [{name:'福州'}, {name:'上海',value:0.38}],
		       [{name:'福州'}, {name:'广州',value:0.26}],
		       [{name:'福州'}, {name:'武汉',value:0.21}],
		       [{name:'福州'}, {name:'长沙',value:0.19}],
		       [{name:'福州'}, {name:'长春',value:0.17}],
		       [{name:'福州'}, {name:'杭州',value:0.16}]
			],
			['北京', '福州', '深圳', '重庆', '上海']
		], 
		['苏州', 
			[			   
		       [{name:'苏州'}, {name:'北京',value:0.7}],
		       [{name:'苏州'}, {name:'上海',value:0.7}],
		       [{name:'苏州'}, {name:'苏州',value:0.57}],
		       [{name:'苏州'}, {name:'深圳',value:0.48}],
		       [{name:'苏州'}, {name:'泉州',value:0.2}],
		       [{name:'苏州'}, {name:'重庆',value:0.19}],
		       [{name:'苏州'}, {name:'杭州',value:0.18}],
		       [{name:'苏州'}, {name:'温州',value:0.17}],
		       [{name:'苏州'}, {name:'广州',value:0.15}],
		       [{name:'苏州'}, {name:'天津',value:0.15}]
			],
			['北京', '上海', '苏州', '深圳', '泉州']
		], 
		['长春', 
			[			   
		       [{name:'长春'}, {name:'北京',value:1.35}],
		       [{name:'长春'}, {name:'上海',value:0.67}],
		       [{name:'长春'}, {name:'重庆',value:0.49}],
		       [{name:'长春'}, {name:'深圳',value:0.35}],
		       [{name:'长春'}, {name:'广州',value:0.21}],
		       [{name:'长春'}, {name:'杭州',value:0.17}],
		       [{name:'长春'}, {name:'西安',value:0.17}],
		       [{name:'长春'}, {name:'成都',value:0.17}],
		       [{name:'长春'}, {name:'常州',value:0.15}],
		       [{name:'长春'}, {name:'长春',value:0.15}]
			],
			['北京', '上海', '重庆', '深圳', '广州']
		], 
		['哈尔滨', 
			[			   
		       [{name:'哈尔滨'}, {name:'北京',value:0.74}],
		       [{name:'哈尔滨'}, {name:'重庆',value:0.59}],
		       [{name:'哈尔滨'}, {name:'上海',value:0.51}],
		       [{name:'哈尔滨'}, {name:'深圳',value:0.44}],
		       [{name:'哈尔滨'}, {name:'哈尔滨',value:0.19}],
		       [{name:'哈尔滨'}, {name:'广州',value:0.17}],
		       [{name:'哈尔滨'}, {name:'南京',value:0.16}],
		       [{name:'哈尔滨'}, {name:'成都',value:0.15}]
			],
			['北京', '重庆', '上海', '深圳', '哈尔滨']
		], 
		['汕头', 
			[			   
		       [{name:'汕头'}, {name:'深圳',value:2.67}],
		       [{name:'汕头'}, {name:'天津',value:0.79}],
		       [{name:'汕头'}, {name:'北京',value:0.43}],
		       [{name:'汕头'}, {name:'上海',value:0.39}],
		       [{name:'汕头'}, {name:'重庆',value:0.22}],
		       [{name:'汕头'}, {name:'广州',value:0.13}],
		       [{name:'汕头'}, {name:'苏州',value:0.12}]
			],
			['深圳', '天津', '北京', '上海', '重庆']
		], 
		['佛山', 
			[				   
		       [{name:'佛山'}, {name:'广州',value:0.54}],
		       [{name:'佛山'}, {name:'北京',value:0.48}],
		       [{name:'佛山'}, {name:'上海',value:0.48}],
		       [{name:'佛山'}, {name:'重庆',value:0.41}],
		       [{name:'佛山'}, {name:'深圳',value:0.4}],
		       [{name:'佛山'}, {name:'天津',value:0.38}],
		       [{name:'佛山'}, {name:'佛山',value:0.3}],
		       [{name:'佛山'}, {name:'台州',value:0.21}],
		       [{name:'佛山'}, {name:'武汉',value:0.2}],
		       [{name:'佛山'}, {name:'厦门',value:0.17}]
			],
			['广州', '北京', '上海', '重庆', '深圳']
		], 
		['东莞', 
			[				   
		       [{name:'东莞'}, {name:'北京',value:0.5}],
		       [{name:'东莞'}, {name:'上海',value:0.49}],
		       [{name:'东莞'}, {name:'深圳',value:0.49}],
		       [{name:'东莞'}, {name:'重庆',value:0.26}],
		       [{name:'东莞'}, {name:'东莞',value:0.25}],
		       [{name:'东莞'}, {name:'广州',value:0.22}],
		       [{name:'东莞'}, {name:'杭州',value:0.19}],
		       [{name:'东莞'}, {name:'中山',value:0.14}],
		       [{name:'东莞'}, {name:'成都',value:0.14}],
		       [{name:'东莞'}, {name:'武汉',value:0.11}]
			],
			['北京', '上海', '深圳', '重庆', '东莞']
		], 
		['宁波', 
			[				   
		       [{name:'宁波'}, {name:'北京',value:0.61}],
		       [{name:'宁波'}, {name:'上海',value:0.47}],
		       [{name:'宁波'}, {name:'宁波',value:0.39}],
		       [{name:'宁波'}, {name:'杭州',value:0.35}],
		       [{name:'宁波'}, {name:'深圳',value:0.32}],
		       [{name:'宁波'}, {name:'重庆',value:0.2}],
		       [{name:'宁波'}, {name:'广州',value:0.15}],
		       [{name:'宁波'}, {name:'天津',value:0.15}],
		       [{name:'宁波'}, {name:'温州',value:0.15}],
		       [{name:'宁波'}, {name:'金华',value:0.13}]
			],
			['北京', '上海', '宁波', '杭州', '深圳']
		], 
		['徐州', 
			[				   
		       [{name:'徐州'}, {name:'北京',value:0.53}],
		       [{name:'徐州'}, {name:'徐州',value:0.37}],
		       [{name:'徐州'}, {name:'上海',value:0.25}],
		       [{name:'徐州'}, {name:'杭州',value:0.22}],
		       [{name:'徐州'}, {name:'天津',value:0.17}],
		       [{name:'徐州'}, {name:'成都',value:0.17}],
		       [{name:'徐州'}, {name:'苏州',value:0.14}],
		       [{name:'徐州'}, {name:'重庆',value:0.13}],
		       [{name:'徐州'}, {name:'福州',value:0.12}],
		       [{name:'徐州'}, {name:'深圳',value:0.12}]
			],
			['北京', '徐州', '上海', '杭州', '天津']
		], 
		['运城', 
			[				   
		       [{name:'运城'}, {name:'北京',value:0.54}],
		       [{name:'运城'}, {name:'重庆',value:0.39}],
		       [{name:'运城'}, {name:'运城',value:0.37}],
		       [{name:'运城'}, {name:'广州',value:0.29}],
		       [{name:'运城'}, {name:'上海',value:0.21}],
		       [{name:'运城'}, {name:'苏州',value:0.21}],
		       [{name:'运城'}, {name:'青岛',value:0.17}],
		       [{name:'运城'}, {name:'武汉',value:0.1}]
			],
			['北京', '重庆', '运城', '广州', '上海']
		], 
		['南宁', 
			[				   
		       [{name:'南宁'}, {name:'北京',value:0.49}],
		       [{name:'南宁'}, {name:'金华',value:0.46}],
		       [{name:'南宁'}, {name:'重庆',value:0.23}],
		       [{name:'南宁'}, {name:'苏州',value:0.18}],
		       [{name:'南宁'}, {name:'广州',value:0.17}],
		       [{name:'南宁'}, {name:'上海',value:0.16}],
		       [{name:'南宁'}, {name:'杭州',value:0.16}],
		       [{name:'南宁'}, {name:'深圳',value:0.16}],
		       [{name:'南宁'}, {name:'成都',value:0.1}]
			],
			['北京', '金华', '重庆', '苏州', '广州']
		], 
		['大连', 
			[				   
		       [{name:'大连'}, {name:'上海',value:0.54}],
		       [{name:'大连'}, {name:'重庆',value:0.45}],
		       [{name:'大连'}, {name:'北京',value:0.38}],
		       [{name:'大连'}, {name:'大连',value:0.27}],
		       [{name:'大连'}, {name:'深圳',value:0.17}],
		       [{name:'大连'}, {name:'天津',value:0.16}],
		       [{name:'大连'}, {name:'广州',value:0.14}],
		       [{name:'大连'}, {name:'成都',value:0.1}],
		       [{name:'大连'}, {name:'杭州',value:0.1}]
			],
			['上海', '重庆', '北京', '大连', '深圳']
		], 
		['潮州', 
			[				   
		       [{name:'潮州'}, {name:'北京',value:0.3}],
		       [{name:'潮州'}, {name:'深圳',value:0.23}],
		       [{name:'潮州'}, {name:'广州',value:0.19}],
		       [{name:'潮州'}, {name:'上海',value:0.19}],
		       [{name:'潮州'}, {name:'杭州',value:0.17}],
		       [{name:'潮州'}, {name:'佛山',value:0.11}],
		       [{name:'潮州'}, {name:'东莞',value:0.09}],
		       [{name:'潮州'}, {name:'天津',value:0.08}],
		       [{name:'潮州'}, {name:'重庆',value:0.08}],
		       [{name:'潮州'}, {name:'潮州',value:0.08}]
			],
			['北京', '深圳', '广州', '上海', '杭州']
		], 
		['东营', 
			[				   
		       [{name:'东营'}, {name:'上海',value:0.41}],
		       [{name:'东营'}, {name:'北京',value:0.3}],
		       [{name:'东营'}, {name:'广州',value:0.21}],
		       [{name:'东营'}, {name:'深圳',value:0.2}],
		       [{name:'东营'}, {name:'朔州',value:0.19}],
		       [{name:'东营'}, {name:'东营',value:0.12}],
		       [{name:'东营'}, {name:'武汉',value:0.11}],
		       [{name:'东营'}, {name:'天津',value:0.09}],
		       [{name:'东营'}, {name:'重庆',value:0.08}],
		       [{name:'东营'}, {name:'温州',value:0.08}]
			],
			['上海', '北京', '广州', '深圳', '朔州']
		], 
		['洛阳', 
			[				   
		       [{name:'洛阳'}, {name:'北京',value:0.4}],
		       [{name:'洛阳'}, {name:'上海',value:0.34}],
		       [{name:'洛阳'}, {name:'深圳',value:0.12}],
		       [{name:'洛阳'}, {name:'东莞',value:0.12}],
		       [{name:'洛阳'}, {name:'郑州',value:0.1}],
		       [{name:'洛阳'}, {name:'广州',value:0.1}],
		       [{name:'洛阳'}, {name:'天津',value:0.09}],
		       [{name:'洛阳'}, {name:'福州',value:0.08}],
		       [{name:'洛阳'}, {name:'重庆',value:0.08}],
		       [{name:'洛阳'}, {name:'遵义',value:0.07}]
			],
			['北京', '上海', '深圳', '东莞', '郑州']
		], 
		['烟台', 
			[ 			   
		       [{name:'烟台'}, {name:'烟台',value:0.64}],
		       [{name:'烟台'}, {name:'北京',value:0.4}],
		       [{name:'烟台'}, {name:'上海',value:0.32}],
		       [{name:'烟台'}, {name:'深圳',value:0.19}],
		       [{name:'烟台'}, {name:'重庆',value:0.14}],
		       [{name:'烟台'}, {name:'广州',value:0.13}],
		       [{name:'烟台'}, {name:'青岛',value:0.1}],
		       [{name:'烟台'}, {name:'杭州',value:0.08}],
		       [{name:'烟台'}, {name:'成都',value:0.07}],
		       [{name:'烟台'}, {name:'天津',value:0.07}]
			],
			['烟台', '北京', '上海', '深圳', '重庆']
		], 
		['常州', 
			[			   
		       [{name:'常州'}, {name:'北京',value:0.51}],
		       [{name:'常州'}, {name:'上海',value:0.34}],
		       [{name:'常州'}, {name:'深圳',value:0.24}],
		       [{name:'常州'}, {name:'常州',value:0.24}],
		       [{name:'常州'}, {name:'温州',value:0.13}],
		       [{name:'常州'}, {name:'杭州',value:0.09}],
		       [{name:'常州'}, {name:'广州',value:0.09}],
		       [{name:'常州'}, {name:'重庆',value:0.07}],
		       [{name:'常州'}, {name:'盐城',value:0.06}],
		       [{name:'常州'}, {name:'阳泉',value:0.06}]
			],
			['北京', '上海', '深圳', '常州', '温州']
		], 
		['保定', 
			[			   
		       [{name:'保定'}, {name:'北京',value:0.5}],
		       [{name:'保定'}, {name:'上海',value:0.36}],
		       [{name:'保定'}, {name:'深圳',value:0.28}],
		       [{name:'保定'}, {name:'重庆',value:0.27}],
		       [{name:'保定'}, {name:'广州',value:0.12}],
		       [{name:'保定'}, {name:'杭州',value:0.1}],
		       [{name:'保定'}, {name:'天津',value:0.09}],
		       [{name:'保定'}, {name:'成都',value:0.09}],
		       [{name:'保定'}, {name:'苏州',value:0.08}],
		       [{name:'保定'}, {name:'廊坊',value:0.06}]
			],
			['北京', '上海', '深圳', '重庆', '广州']
		], 
		['无锡', 
			[			   
		       [{name:'无锡'}, {name:'上海',value:0.48}],
		       [{name:'无锡'}, {name:'北京',value:0.48}],
		       [{name:'无锡'}, {name:'深圳',value:0.15}],
		       [{name:'无锡'}, {name:'重庆',value:0.13}],
		       [{name:'无锡'}, {name:'杭州',value:0.11}],
		       [{name:'无锡'}, {name:'南京',value:0.1}],
		       [{name:'无锡'}, {name:'无锡',value:0.07}],
		       [{name:'无锡'}, {name:'广州',value:0.07}],
		       [{name:'无锡'}, {name:'天津',value:0.07}],
		       [{name:'无锡'}, {name:'成都',value:0.06}]
			],
			['上海', '北京', '深圳', '重庆', '杭州']
		], 
		['金华', 
			[			   
		       [{name:'金华'}, {name:'金华',value:0.6}],
		       [{name:'金华'}, {name:'北京',value:0.21}],
		       [{name:'金华'}, {name:'上海',value:0.18}],
		       [{name:'金华'}, {name:'广州',value:0.15}],
		       [{name:'金华'}, {name:'深圳',value:0.15}],
		       [{name:'金华'}, {name:'河源',value:0.14}],
		       [{name:'金华'}, {name:'杭州',value:0.07}],
		       [{name:'金华'}, {name:'重庆',value:0.07}],
		       [{name:'金华'}, {name:'成都',value:0.06}],
		       [{name:'金华'}, {name:'温州',value:0.05}]
			],
			['金华', '北京', '上海', '广州', '深圳']
		], 
		['三明', 
			[			   
		       [{name:'三明'}, {name:'上海',value:0.29}],
		       [{name:'三明'}, {name:'深圳',value:0.27}],
		       [{name:'三明'}, {name:'广州',value:0.16}],
		       [{name:'三明'}, {name:'北京',value:0.15}],
		       [{name:'三明'}, {name:'杭州',value:0.1}],
		       [{name:'三明'}, {name:'赣州',value:0.07}],
		       [{name:'三明'}, {name:'三明',value:0.06}],
		       [{name:'三明'}, {name:'东莞',value:0.06}],
		       [{name:'三明'}, {name:'成都',value:0.06}],
		       [{name:'三明'}, {name:'重庆',value:0.05}]
			],
			['上海', '深圳', '广州', '北京', '杭州']
		], 
		['邢台', 
			[			   
		       [{name:'邢台'}, {name:'北京',value:0.45}],
		       [{name:'邢台'}, {name:'深圳',value:0.18}],
		       [{name:'邢台'}, {name:'上海',value:0.18}],
		       [{name:'邢台'}, {name:'杭州',value:0.14}],
		       [{name:'邢台'}, {name:'成都',value:0.1}],
		       [{name:'邢台'}, {name:'重庆',value:0.1}],
		       [{name:'邢台'}, {name:'邢台',value:0.09}],
		       [{name:'邢台'}, {name:'广州',value:0.08}],
		       [{name:'邢台'}, {name:'郑州',value:0.06}],
		       [{name:'邢台'}, {name:'天津',value:0.05}]
			],
			['北京', '深圳', '上海', '杭州', '成都']
		], 
		['乐山', 
			[			   
			   
		       [{name:'乐山'}, {name:'乐山',value:1.75}],
		       [{name:'乐山'}, {name:'眉山',value:0.42}],
		       [{name:'乐山'}, {name:'上海',value:0.13}],
		       [{name:'乐山'}, {name:'益阳',value:0.12}],
		       [{name:'乐山'}, {name:'广州',value:0.12}],
		       [{name:'乐山'}, {name:'北京',value:0.03}],
		       [{name:'乐山'}, {name:'郑州',value:0.03}]
			],
			['乐山', '眉山', '上海', '益阳', '广州']
		], 
		['绵阳', 
			[			   
		       [{name:'绵阳'}, {name:'北京',value:0.36}],
		       [{name:'绵阳'}, {name:'上海',value:0.25}],
		       [{name:'绵阳'}, {name:'成都',value:0.21}],
		       [{name:'绵阳'}, {name:'宁波',value:0.14}],
		       [{name:'绵阳'}, {name:'深圳',value:0.13}],
		       [{name:'绵阳'}, {name:'广州',value:0.09}],
		       [{name:'绵阳'}, {name:'重庆',value:0.09}],
		       [{name:'绵阳'}, {name:'武汉',value:0.08}],
		       [{name:'绵阳'}, {name:'苏州',value:0.07}],
		       [{name:'绵阳'}, {name:'福州',value:0.05}]
			],
			['北京', '上海', '成都', '宁波', '深圳']
		], 
		['萍乡', 
			[			   
		       [{name:'萍乡'}, {name:'北京',value:0.29}],
		       [{name:'萍乡'}, {name:'深圳',value:0.21}],
		       [{name:'萍乡'}, {name:'上海',value:0.19}],
		       [{name:'萍乡'}, {name:'重庆',value:0.11}],
		       [{name:'萍乡'}, {name:'成都',value:0.08}],
		       [{name:'萍乡'}, {name:'天津',value:0.08}],
		       [{name:'萍乡'}, {name:'武汉',value:0.07}],
		       [{name:'萍乡'}, {name:'杭州',value:0.07}],
		       [{name:'萍乡'}, {name:'广州',value:0.06}],
		       [{name:'萍乡'}, {name:'南京',value:0.04}]
			],
			['北京', '深圳', '上海', '重庆', '成都']
		], 
		['邯郸', 
			[	   
		       [{name:'邯郸'}, {name:'北京',value:0.23}],
		       [{name:'邯郸'}, {name:'上海',value:0.16}],
		       [{name:'邯郸'}, {name:'深圳',value:0.15}],
		       [{name:'邯郸'}, {name:'重庆',value:0.08}],
		       [{name:'邯郸'}, {name:'广州',value:0.08}],
		       [{name:'邯郸'}, {name:'成都',value:0.08}],
		       [{name:'邯郸'}, {name:'福州',value:0.05}],
		       [{name:'邯郸'}, {name:'东莞',value:0.05}],
		       [{name:'邯郸'}, {name:'杭州',value:0.05}],
		       [{name:'邯郸'}, {name:'西安',value:0.05}]
			],
			['北京', '上海', '深圳', '重庆', '广州']
		], 
		['荆门', 
			[			   			   
		       [{name:'荆门'}, {name:'上海',value:0.22}],
		       [{name:'荆门'}, {name:'重庆',value:0.21}],
		       [{name:'荆门'}, {name:'北京',value:0.2}],
		       [{name:'荆门'}, {name:'深圳',value:0.13}],
		       [{name:'荆门'}, {name:'广州',value:0.1}],
		       [{name:'荆门'}, {name:'武汉',value:0.05}],
		       [{name:'荆门'}, {name:'天津',value:0.05}],
		       [{name:'荆门'}, {name:'杭州',value:0.05}],
		       [{name:'荆门'}, {name:'西安',value:0.04}],
		       [{name:'荆门'}, {name:'苏州',value:0.04}]
			],
			['上海', '重庆', '北京', '深圳', '广州']
		], 
		['太原', 
			[			   
		       [{name:'太原'}, {name:'北京',value:0.4}],
		       [{name:'太原'}, {name:'深圳',value:0.24}],
		       [{name:'太原'}, {name:'淄博',value:0.12}],
		       [{name:'太原'}, {name:'广州',value:0.09}],
		       [{name:'太原'}, {name:'四平',value:0.09}],
		       [{name:'太原'}, {name:'唐山',value:0.06}],
		       [{name:'太原'}, {name:'上海',value:0.06}],
		       [{name:'太原'}, {name:'温州',value:0.05}],
		       [{name:'太原'}, {name:'天津',value:0.04}],
		       [{name:'太原'}, {name:'重庆',value:0.04}]
			],
			['北京', '深圳', '上海', '重庆', '成都']
		], 
		['洛阳', 
			[			   		   
		       [{name:'泉州'}, {name:'北京',value:0.19}],
		       [{name:'泉州'}, {name:'上海',value:0.17}],
		       [{name:'泉州'}, {name:'佛山',value:0.13}],
		       [{name:'泉州'}, {name:'泉州',value:0.11}],
		       [{name:'泉州'}, {name:'深圳',value:0.1}],
		       [{name:'泉州'}, {name:'成都',value:0.07}],
		       [{name:'泉州'}, {name:'广州',value:0.06}],
		       [{name:'泉州'}, {name:'杭州',value:0.06}],
		       [{name:'泉州'}, {name:'重庆',value:0.06}]
			],
			['北京', '上海', '佛山', '泉州', '深圳']
		], 
		['兰州', 
			[		       
		       [{name:'兰州'}, {name:'北京',value:0.2}],
		       [{name:'兰州'}, {name:'上海',value:0.15}],
		       [{name:'兰州'}, {name:'重庆',value:0.1}],
		       [{name:'兰州'}, {name:'深圳',value:0.1}],
		       [{name:'兰州'}, {name:'西安',value:0.06}],
		       [{name:'兰州'}, {name:'成都',value:0.06}],
		       [{name:'兰州'}, {name:'天津',value:0.05}],
		       [{name:'兰州'}, {name:'广州',value:0.05}],
		       [{name:'兰州'}, {name:'杭州',value:0.05}],
		       [{name:'兰州'}, {name:'郑州',value:0.04}]
			],
			['北京', '上海', '重庆', '深圳', '西安']
		], 
		['临沂', 
			[			   
		       [{name:'临沂'}, {name:'北京',value:0.18}],
		       [{name:'临沂'}, {name:'上海',value:0.09}],
		       [{name:'临沂'}, {name:'深圳',value:0.09}],
		       [{name:'临沂'}, {name:'重庆',value:0.08}],
		       [{name:'临沂'}, {name:'厦门',value:0.07}],
		       [{name:'临沂'}, {name:'成都',value:0.06}],
		       [{name:'临沂'}, {name:'临沂',value:0.05}],
		       [{name:'临沂'}, {name:'广州',value:0.04}],
		       [{name:'临沂'}, {name:'杭州',value:0.04}]
			],
			['北京', '上海', '深圳', '重庆', '厦门']
		], 
		['龙岩', 
			[			   			   
		       [{name:'龙岩'}, {name:'北京',value:0.18}],
		       [{name:'龙岩'}, {name:'上海',value:0.1}],
		       [{name:'龙岩'}, {name:'深圳',value:0.09}],
		       [{name:'龙岩'}, {name:'重庆',value:0.07}],
		       [{name:'龙岩'}, {name:'广州',value:0.07}],
		       [{name:'龙岩'}, {name:'杭州',value:0.06}],
		       [{name:'龙岩'}, {name:'苏州',value:0.05}],
		       [{name:'龙岩'}, {name:'天津',value:0.05}],
		       [{name:'龙岩'}, {name:'成都',value:0.04}]
			],
			['北京', '上海', '深圳', '重庆', '广州']
		], 
		['中山', 
			[			   			   
		       [{name:'中山'}, {name:'深圳',value:0.12}],
		       [{name:'中山'}, {name:'温州',value:0.12}],
		       [{name:'中山'}, {name:'北京',value:0.1}],
		       [{name:'中山'}, {name:'上海',value:0.08}],
		       [{name:'中山'}, {name:'东莞',value:0.07}],
		       [{name:'中山'}, {name:'成都',value:0.06}],
		       [{name:'中山'}, {name:'中山',value:0.05}],
		       [{name:'中山'}, {name:'南京',value:0.05}],
		       [{name:'中山'}, {name:'苏州',value:0.04}],
		       [{name:'中山'}, {name:'天津',value:0.04}]
			],
			['深圳', '温州', '北京', '上海', '东莞']
		], 
		['惠州', 
			[			   			   
		       [{name:'惠州'}, {name:'北京',value:0.24}],
		       [{name:'惠州'}, {name:'上海',value:0.12}],
		       [{name:'惠州'}, {name:'深圳',value:0.11}],
		       [{name:'惠州'}, {name:'武汉',value:0.05}],
		       [{name:'惠州'}, {name:'杭州',value:0.05}],
		       [{name:'惠州'}, {name:'广州',value:0.04}],
		       [{name:'惠州'}, {name:'惠州',value:0.04}],
		       [{name:'惠州'}, {name:'东莞',value:0.04}],
		       [{name:'惠州'}, {name:'西安',value:0.04}],
		       [{name:'惠州'}, {name:'重庆',value:0.04}]
			],
			['北京', '上海', '深圳', '武汉', '杭州']
		], 
		['唐山', 
			[			   
		       [{name:'唐山'}, {name:'北京',value:0.13}],
		       [{name:'唐山'}, {name:'上海',value:0.08}],
		       [{name:'唐山'}, {name:'深圳',value:0.08}],
		       [{name:'唐山'}, {name:'重庆',value:0.07}],
		       [{name:'唐山'}, {name:'广州',value:0.07}],
		       [{name:'唐山'}, {name:'杭州',value:0.07}],
		       [{name:'唐山'}, {name:'东莞',value:0.05}],
		       [{name:'唐山'}, {name:'唐山',value:0.04}]
			],
			['北京', '上海', '深圳', '重庆', '广州']
		], 
		['盐城', 
			[			   
		       [{name:'盐城'}, {name:'北京',value:0.13}],
		       [{name:'盐城'}, {name:'上海',value:0.13}],
		       [{name:'盐城'}, {name:'深圳',value:0.11}],
		       [{name:'盐城'}, {name:'广州',value:0.06}],
		       [{name:'盐城'}, {name:'杭州',value:0.06}],
		       [{name:'盐城'}, {name:'重庆',value:0.05}],
		       [{name:'盐城'}, {name:'苏州',value:0.05}],
		       [{name:'盐城'}, {name:'珠海',value:0.04}]
			],
			['北京', '上海', '深圳', '广州', '杭州']
		], 
		['芜湖', 
			[			   
		       [{name:'芜湖'}, {name:'北京',value:0.14}],
		       [{name:'芜湖'}, {name:'深圳',value:0.08}],
		       [{name:'芜湖'}, {name:'上海',value:0.07}],
		       [{name:'芜湖'}, {name:'苏州',value:0.07}],
		       [{name:'芜湖'}, {name:'杭州',value:0.05}],
		       [{name:'芜湖'}, {name:'广州',value:0.05}],
		       [{name:'芜湖'}, {name:'重庆',value:0.05}],
		       [{name:'芜湖'}, {name:'温州',value:0.04}],
		       [{name:'芜湖'}, {name:'珠海',value:0.04}]
			],
			['北京', '深圳', '上海', '苏州', '杭州']
		]
	];

	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

	var convertData = function (data) {
	    var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var dataItem = data[i];
	        var fromCoord = geoCoordMap[dataItem[0].name];
	        var toCoord = geoCoordMap[dataItem[1].name];
	        if (fromCoord && toCoord) {
	            res.push([{
	                coord: fromCoord
	            }, {
	                coord: toCoord
	            }]);
	        }
	    }
	    return res;
	};

	//var color = ['#a6c84c', '#ffa022', '#46bee9'];
	var series = [];
	[['重庆', CQData]].forEach(function (item, i) {
	    series.push({
	        name: '重庆 Top10',
	        type: 'lines',
	        zlevel: 1,
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0.7,
	            color: '#ff6600',//'#fff',
	            symbolSize: 3
	        },
	        lineStyle: {
	            normal: {
	                color: '#ff6600',//color[i],
	                width: 0,
	                curveness: 0.2
	            }
	        },
	        data: convertData(item[1])
	    },
	    {
	        name: '重庆 Top10',
	        type: 'lines',
	        zlevel: 2,
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0,
	            symbol: 'triangle',
	            symbolSize: 7
	        },
	        lineStyle: {
	            normal: {
	                color: '#ff6600',//color[i],
	                width: 1,
	                opacity: 0.4,
	                curveness: 0.2
	            }
	        },
	        data: convertData(item[1])
	    },
	    {
	        name: '重庆 Top10',
	        type: 'effectScatter',
	        coordinateSystem: 'geo',
	        zlevel: 2,
	        rippleEffect: {
	            brushType: 'stroke'
	        },
	        label: {
	            normal: {
	                show: true,
	                position: 'right',
	                formatter: '{b}'
	            }
	        },
	        symbolSize: function (val) {
	        	console.log(val);
	            return val[2]//val[2] / 8;
	        },
	        itemStyle: {
	            normal: {
	                color: '#ff6600',//color[i]
	            }
	        },
	        data: item[1].map(function (dataItem) {
	            return {
	                name: dataItem[1].name,
	                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
	            };
	        })
	    });
	});

	var option = {
	    //backgroundColor: '#404a59',
	    tooltip : {
	        trigger: 'item'
	    },
	    legend: {
	        orient: 'vertical',
	        top: 'bottom',
	        left: 'right',
	        data:[''],
	        textStyle: {
	            color: '#fff'
	        },
	        show: false,
	        selectedMode: 'single'
	    },
	    geo: {
	        map: 'china',
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        roam: true,
	        itemStyle: {
	            normal: {
	                areaColor: '#d9dbe1',//'#323c48',
	                borderColor: '#fff',//'#404a59'
	            },
	            emphasis: {
	                areaColor: '#c4e3f3',//'#2a333d'
	            }
	        }
	    },
	    series: series
	};

	var myChart = echarts.init(document.getElementById('content-map'));
	myChart.setOption(option);


	function getClickData(name) {
		debugger
		//var color = ['#a6c84c', '#ffa022', '#46bee9'];
		var data = areaData;//[['北京', BJData], ['上海', SHData], ['广州', GZData]];
		var currentIndex = 0;
		for(var i = 0, len = data.length; i < len; i++) {
			var d = data[i];
			if(d[0] === name) {
				currentIndex = i;
				break;
			}
		}
		var items = [data[currentIndex]];
		var series1 = []
		items.forEach(function (item, i) {
	    series1.push({
	        name: name + ' Top10',
	        type: 'lines',
	        zlevel: 1,
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0.7,
	            color: '#fff',
	            symbolSize: 3
	        },
	        lineStyle: {
	            normal: {
	                color: '#ff6600',
	                width: 0,
	                curveness: 0.2
	            }
	        },
	        data: convertData(item[1])
	    },
	    {
	        name: name + ' Top10',
	        type: 'lines',
	        zlevel: 2,
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0,
	            symbol: 'triangle',
	            symbolSize: 7
	        },
	        lineStyle: {
	            normal: {
	                color: '#ff6600',
	                width: 1,
	                opacity: 0.4,
	                curveness: 0.2
	            }
	        },
	        data: convertData(item[1])
	    },
	    {
	        name: name + ' Top10',
	        type: 'effectScatter',
	        coordinateSystem: 'geo',
	        zlevel: 2,
	        rippleEffect: {
	            brushType: 'stroke'
	        },
	        label: {
	            normal: {
	                show: true,
	                position: 'right',
	                formatter: '{b}'
	            }
	        },
	        symbolSize: function (val) {
	            return val[2] / 8;
	        },
	        itemStyle: {
	            normal: {
	                color: '#ff6600'
	            }
	        },
	        data: item[1].map(function (dataItem) {
	            return {
	                name: dataItem[1].name,
	                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
	            };
	        })
	    });
	});

		return series1;
	}

	function focus(param) {
		debugger
        	var name = param.name;
        	var currentObj = getClickData(name);
        	//option.series = currentObj;
        	//var myChart1 = echarts.init(document.getElementById('main')); 
        	//myChart.setOption(option, true);
        	myChart.setOption({
        		series: currentObj
        	});
        	return;
		}
	//console.log(echarts.config.EVENT.MAP_SELECTED);
	myChart.on('click', focus)     