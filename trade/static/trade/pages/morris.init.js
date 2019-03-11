
/*
 Template Name: Upcube - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Morris init js
 */

!function($) {
    "use strict";

    var MorrisCharts = function() {};

    //creates line chart
    MorrisCharts.prototype.createLineChart = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          hideHover: 'auto',
          gridLineColor: '#eef0f2',
          resize: true, //defaulted to true
          lineColors: lineColors
        });
    },

    //creates line chart Dark
    MorrisCharts.prototype.createLineChart1 = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Line({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            gridLineColor: '#3d434a',
            gridTextColor: '#eee',
            hideHover: 'auto',
            pointSize: 3,
            resize: true, //defaulted to true
            lineColors: lineColors
        });
    },
    //creates area chart
    MorrisCharts.prototype.createAreaChart = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 3,
            lineWidth: 2,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            resize: true,
            hideHover: 'auto',
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });
    },
    //creates Bar chart
    MorrisCharts.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            gridLineColor: '#eef0f2',
            barSizeRatio: 0.4,
            resize: true,
            hideHover: 'auto',
            barColors: lineColors
        });
    },
    //creates Donut chart
    MorrisCharts.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true,
            colors: colors
        });
    },
    //creates Donut chart Dark
    MorrisCharts.prototype.createDonutChart1 = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true,
            colors: colors,
            labelColor: '#fff',
            backgroundColor: '#0097a7'
        });
    },
    //creates Stacked chart
    MorrisCharts.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#4ac18e',
            gridTextColor: '#eee',
            barColors: lineColors
        });
    },
    MorrisCharts.prototype.init = function() {

        //create line chart
        // var $data  = [
        //     { y: '2019-03-03', a: 40,  b: 41 },
        //     { y: '2019-03-04', a: 45,  b: 46 },
        //     { y: '2019-03-05', a: 30,  b: 27 },
        //     { y: '2019-03-06', a: 35,  b: 30 },
        //     { y: '2019-03-07', a: 32,  b: 32 },
        //     { y: '2019-03-08', a: 52,  b: 44 },
        //     { y: '2019-03-09', a: 44,  b: 29 }
        //   ];
        // this.createLineChart('morris-line-example', $data, 'y', ['a', 'b'], ['Average', 'Apple'], ['#0f9cf3', '#0097a7']);

        //apple
        var $data_apple  = [
            { y: '2019-03-03', a: 40,  b: 41 },
            { y: '2019-03-04', a: 45,  b: 46 },
            { y: '2019-03-05', a: 30,  b: 27 },
            { y: '2019-03-06', a: 35,  b: 30 },
            { y: '2019-03-07', a: 32,  b: 32 },
            { y: '2019-03-08', a: 52,  b: 44 },
            { y: '2019-03-09', a: 44,  b: 29 }
          ];
        if (document.getElementById('morris-line-apple') != null)
            this.createLineChart('morris-line-apple', $data_apple, 'y', ['a', 'b'], ['Average', 'Apple'], ['#0f9cf3', '#0097a7']);

        //alibaba
        var $data_alibaba  = [
            { y: '2019-03-03', a: 40,  b: 48 },
            { y: '2019-03-04', a: 45,  b: 50 },
            { y: '2019-03-05', a: 30,  b: 43 },
            { y: '2019-03-06', a: 35,  b: 44 },
            { y: '2019-03-07', a: 32,  b: 42 },
            { y: '2019-03-08', a: 52,  b: 50 },
            { y: '2019-03-09', a: 44,  b: 43 }
          ];
        if (document.getElementById('morris-line-alibaba') != null)
            this.createLineChart('morris-line-alibaba', $data_alibaba, 'y', ['a', 'b'], ['Average', 'Alibaba'], ['#0f9cf3', '#0097a7']);

        //morgan
        var $data_morgan  = [
            { y: '2019-03-03', a: 40,  b: 41 },
            { y: '2019-03-04', a: 45,  b: 46 },
            { y: '2019-03-05', a: 30,  b: 27 },
            { y: '2019-03-06', a: 35,  b: 30 },
            { y: '2019-03-07', a: 32,  b: 32 },
            { y: '2019-03-08', a: 52,  b: 44 },
            { y: '2019-03-09', a: 44,  b: 29 }
          ];
        if (document.getElementById('morris-line-morgan') != null)
            this.createLineChart('morris-line-morgan', $data_morgan, 'y', ['a', 'b'], ['Average', 'Morgan'], ['#0f9cf3', '#0097a7']);

        //dazhong
        var $data_dazhong  = [
            { y: '2019-03-03', a: 40,  b: 30 },
            { y: '2019-03-04', a: 45,  b: 35 },
            { y: '2019-03-05', a: 30,  b: 27 },
            { y: '2019-03-06', a: 35,  b: 30 },
            { y: '2019-03-07', a: 32,  b: 32 },
            { y: '2019-03-08', a: 52,  b: 39 },
            { y: '2019-03-09', a: 44,  b: 33 }
          ];
        if (document.getElementById('morris-line-dazhong') != null)
            this.createLineChart('morris-line-dazhong', $data_dazhong, 'y', ['a', 'b'], ['Average', 'DaZhong'], ['#0f9cf3', '#0097a7']);

        //spc
        var $data_spc  = [
            { y: '2019-03-03', a: 40,  b: 41 },
            { y: '2019-03-04', a: 45,  b: 46 },
            { y: '2019-03-05', a: 30,  b: 27 },
            { y: '2019-03-06', a: 35,  b: 30 },
            { y: '2019-03-07', a: 32,  b: 32 },
            { y: '2019-03-08', a: 52,  b: 44 },
            { y: '2019-03-09', a: 44,  b: 29 }
          ];
        if (document.getElementById('morris-line-spc') != null)
            this.createLineChart('morris-line-spc', $data_spc, 'y', ['a', 'b'], ['Average', 'SPC'], ['#0f9cf3', '#0097a7']);

        //creating area chart
        var $areaData = [
            {y: '2009', a: 10, b: 20},
            {y: '2010', a: 75, b: 65},
            {y: '2011', a: 50, b: 40},
            {y: '2012', a: 75, b: 65},
            {y: '2013', a: 50, b: 40},
            {y: '2014', a: 75, b: 65},
            {y: '2015', a: 90, b: 60},
            {y: '2016', a: 90, b: 75}
        ];
        this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#f32f53', '#ffbb44']);

        //creating bar chart
        var $barData = [
            {y: '2009', a: 100, b: 90},
            {y: '2010', a: 75, b: 65},
            {y: '2011', a: 50, b: 40},
            {y: '2012', a: 75, b: 65},
            {y: '2013', a: 50, b: 40},
            {y: '2014', a: 75, b: 65},
            {y: '2015', a: 100, b: 90},
            {y: '2016', a: 90, b: 75}
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#0097a7', '#ffbb44']);

        //creating Stacked chart
        var $stckedData  = [
            { y: '2005', a: 45, b: 180},
            { y: '2006', a: 75,  b: 65},
            { y: '2007', a: 100, b: 90},
            { y: '2008', a: 75,  b: 65},
            { y: '2009', a: 100, b: 90},
            { y: '2010', a: 75,  b: 65},
            { y: '2011', a: 50,  b: 40},
            { y: '2012', a: 75,  b: 65},
            { y: '2013', a: 50,  b: 40},
            { y: '2014', a: 75,  b: 65},
            { y: '2015', a: 100, b: 90},
            { y: '2016', a: 80, b: 65}
        ];
        this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#0e74b3','#f9f9f9']);

        //creating donut chart
        var $donutData = [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ];
        this.createDonutChart('morris-donut-example', $donutData, ['#ffbb44', '#0097a7', '#67a8e4']);

        //creating donut chart Dark
        var $donutData1 = [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ];
        this.createDonutChart1('morris-donut-example-dark', $donutData1, ['#f0f1f4', '#f0f1f4', '#f0f1f4']);

        //create line chart Dark
        var $data1  = [
            { y: '3/2', a: 40, b: 41 },
            { y: '3/3', a: 45,  b: 46 },
            { y: '3/4', a: 30,  b: 27 },
            { y: '3/5', a: 35,  b: 30 },
            { y: '3/6', a: 32,  b: 32 },
            { y: '3/7', a: 52,  b: 44 },
            { y: '3/8', a: 44, b: 29 }
        ];
        this.createLineChart1('morris-line-example-dark', $data1, 'y', ['a', 'b'], ['Average', 'Apple'], ['#3292e0', '#dcdcdc']);
    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);