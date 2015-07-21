

    
var myChart = echarts.init(document.getElementById('main'), theme); 
                
var option = {
  title:{
    text:'动态数据',
    subtext:'纯属虚构'
  },
  tooltip:{
    trigger:'axis'
  },
  legend:{
    data:['每小时成交金额','每小时成交单量','每小时成交票量']
  },
  toolbox: {
    show: true,
    feature: {
      mark : {show: true},
      dataView : {show: true, readOnly: false},
      magicType : {show: true, type: ['line', 'bar']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
  },
  xAxis:[
    {
      type : 'category',
      boundaryGap : true,
      data : (function (){
          var now = new Date();
          var res = [];
          var len = 10;
          while (len--) {
              res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
              now = new Date(now - 2000);
          }
          return res;
      })()
    },
    {
      type : 'category',
      boundaryGap : true,
      data : (function (){
          var res = [];
          var len = 10;
          while (len--) {
              res.push(len + 1);
          }
          return res;
      })()
    }
  ],
  yAxis: [
    {
        type : 'value',
        scale: true,
        name : '价格',
        boundaryGap: [0.2, 0.2]
    },
    {
        type : 'value',
        scale: true,
        name : '预购量',
        boundaryGap: [0.2, 0.2]
    }
  ],
  series: [
    {
        name:'每小时成交金额',
        type:'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data:(function (){
            var res = [];
            var len = 10;
            while (len--) {
                res.push(Math.round(Math.random() * 1000));
            }
            return res;
        })()
    },
    {
        name:'每小时成交单量',
        type:'line',
        data:(function (){
            var res = [];
            var len = 10;
            while (len--) {
                res.push((Math.random()*10 + 5).toFixed(1) - 0);
            }
            return res;
        })()
    },
    {
        name:'每小时成交票量',
        type:'line',
        data:(function (){
            var res = [];
            var lll = 10;
            while (lll--) {
                res.push((Math.random()*10 + 5).toFixed(1) - 0);
            }
            return res;
        })()
    }
  ]
}

// 为echarts对象加载数据 
myChart.setOption(option); 


var timeTicket;
var lastData = 11;
var randomnum;
var axisData;
clearInterval(timeTicket);
timeTicket = setInterval(function (){
    lastData += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
    lastData = lastData.toFixed(1) - 0;
    randomnum = Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1)
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
    
    // 动态数据接口 addData
    myChart.addData([
        [
            0,        // 系列索引
            Math.round(Math.random() * 1000), // 新增数据
            false,     // 新增数据是否从队列头部插入
            false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        ],
        [
            1,        // 系列索引
            lastData, // 新增数据
            false,    // 新增数据是否从队列头部插入
            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
            axisData  // 坐标轴标签
        ],
        [
            2,        // 系列索引
            randomnum, // 新增数据
            false,    // 新增数据是否从队列头部插入
            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
            axisData  // 坐标轴标签
          ]
    ]);
}, 1000);

var myPieChart = echarts.init(document.getElementById('pie'), theme);
var pieOption = {
    title : {
        text: '无线占比'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'right',
        data:['Mobile','Online']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '30%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '35%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'Mobile'},
                {value:710, name:'Online'}
            ]
        }
    ]
};
myPieChart.setOption(pieOption);

var myMapChart = echarts.init(document.getElementById('hotmap'), theme);

var mapOption = {
    backgroundColor: '#000000',
    color: ['red','yellow','green'],
    title : {
        show: false,
        text: '模拟迁徙',
        subtext:'数据纯属虚构',
        x:'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: '{b}'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['热点图'],
        selectedMode: 'single',
        textStyle : {
            color: '#fff'
        }
    },
    toolbox: {
        show : false,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataRange: {
        show:false,
        min : 0,
        max : 1000,
        calculable : true,
        color: ['red','yellow','green'],
        textStyle:{
            color:'#fff'
        }
    },
    series : [
        {
            name: '全国',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: 'china',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:0.5,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data:[],
            markLine : {
                smooth:true,
                symbol: ['none', 'circle'],  
                symbolSize : 1,
                itemStyle : {
                    normal: {
                        color:'#fff',
                        borderWidth:1,
                        borderColor:'rgba(30,144,255,0.5)'
                    }
                },
                data : [
                    
                ],
            },
            geoCoord: {
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
                '韶关': [113.7964,24.7028]
            }
        },
        {
            name: '北京 Top10',
            type: 'map',
            mapType: 'china',
            data:[],
            markLine : {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data : [
                    
                ]
            },
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return v/1.5
                    // return v;
                },
                effect : {
                    show: true,
                    shadowBlur : 1,
                    scaleSize : 2
                    // shadowColor: 'red',
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    },
                    emphasis: {
                        label:{position:'top'}
                    }
                },
                data : [
                    {name:'北京',value:10},
                    {name:'上海',value:8},
                    {name:'广州',value:7},
                    {name:'大连',value:6},
                    {name:'南宁',value:5},
                    {name:'南昌',value:4},
                    {name:'拉萨',value:2},
                    {name:'长春',value:2},
                    {name:'包头',value:1},
                    {name:'重庆',value:1},
                    {name:'常州',value:1}
                ]
            }
        }
    ]
};

myMapChart.setOption(mapOption);

/**

*/
Countdown = function () {
    _(this).bindAll('update', 'executeAnimation', 'finishAnimation');
    this.setVars.apply(this, arguments);
    this.update();
    this.setData();
};
Countdown.prototype = {
    duration: 1000,
    setVars: function (time, el, template) {
        this.max = time;
        this.time = time;
        this.el = el;
        this.template = _(template.innerHTML).template();
        this.delta = -1;

        this.data = {
            current: '0',
            previous: '0'
        };
    },
    update: function () {
        this.toArraylist();
        this.setupAnimation();
        _(this.executeAnimation).delay(20);
        _(this.finishAnimation).delay(this.duration * 0.9);
        _(this.update).delay(this.duration);
    },
    checkTime: function () {
        this.time += this.delta;
        if (this.time === 0)
            this.delta = 1;
        if (this.time === this.max)
            this.delta = -1;
        this.delta === 1 ? this.toggleDirection('up', 'down') : this.toggleDirection('down', 'up');
        this.nextTime = this.time + this.delta;
    },
    toggleDirection: function (add, remove) {
        for(var i = 0; i < this.el.length; i++){
            this.el[i].classList.add(add);
            this.el[i].classList.remove(remove);
        }
    },
    setSizes: function () {
        this.currentSize = this.getSize(this.time);
        this.nextSize = this.getSize(this.nextTime);
    },
    getSize: function (time) {
        return time > 9 ? 'small' : '';
    },
    setupAnimation: function () {
        var html = '';
        for(var i = 0; i < this.arraylist.length; i ++){
            html += this.template(this.arraylist[i]);
        }
        this.el[0].innerHTML = html;
    },
    executeAnimation: function () {
        // this.el.classList.add('changing');
        $(this.el).find('.count').addClass('changing');
    },
    finishAnimation: function () {
        $(this.el).find('.count').addClass('changed');
        $(this.el).find('.count').removeClass('changing');
    },
    setData: function () {
        this.data.tmp = this.data.previous;
        // this.data.current = Math.floor(Math.random()*1000000000);
        this.data.current = this.data.previous;
        this.data.previous = Math.floor(Math.random()*1000000000);

    },
    toArraylist: function () {
        this.setData();
        
        this.arraylist = [];
        this.currentlist = this.handledata(this.data.current).split("");
        this.nextlist = this.handledata(this.data.previous).split("");
        for(var i = 0; i < this.currentlist.length; i++){
            var obj = {};
            obj.time = this.currentlist[i];
            obj.currentSize = '';
            obj.nextSize = '';
            obj.nextTime = this.nextlist[i];
            this.arraylist.push(obj);
        }
    },
    handledata: function (str) {
        str = str.toString();
        var len = 9 - str.length;
        var stringzero = '';
        for(var i = 0; i < len; i ++) {
            stringzero += '0';
        }
        str = stringzero + str;
        return str;
    }
};
new Countdown(100, $('#count'), document.querySelector('#count-template'));