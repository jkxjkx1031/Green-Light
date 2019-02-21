<<<<<<< HEAD

$(document).ready(function () {
    $("#submitBtn2").click(function () {
        //alert("end out ");
        //alert("success");

        // var c = document.getElementById("salesChart")
        // var cxt = c.getContext("2d")
        // c.height = c.height
        $('#salesChart').remove()
        $('#chart').append('<canvas id="salesChart"></canvas>');
        container=document.getElementById("salesChart");
        context=container.getContext("2d");
        // $("#select_car").on('change'.function){
        //     var objS = 
        // }
        //alert("success1");
        var objS=document.getElementById('select_car');
        var car_value=objS.options[objS.selectedIndex].value;
        //alert(car_value)
        //app.config.xAxis3D = xAxis3D_value;
        //app.config.onChange();
        //alert("success2");

        if (car_value=="价格"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
            var salesChartCanvas = c_canvas.getContext('2d')
            // This will get the first returned node in the jQuery collection.
            var salesChart = new Chart(salesChartCanvas);
            var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                    {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                    },
                    {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                    }
                ]
            };



            var carSalesUrl = "http://localhost:5000/carSales";
        //var sendMessage = "you have my invitation!";
            var content = car_value
            var data = {
                data: JSON.stringify({ 'car_value': content })
            };
        
        // console.log("debug 1");
            $.ajax({
                url: carSalesUrl,
                type: "POST",
                data: data,
                dataType: "json",
                success: function (result) {
                    //alert("success");
                    var jsonMsg = JSON.parse(JSON.stringify(result));
                    //alert(jsonMsg.data);
                    salesChartData.datasets[0].data = jsonMsg.data;
                    salesChartData.datasets[1].data = jsonMsg.data;
                    console.log(JSON.stringify(salesChartData.datasets));

                    //Create the line chart
                    //$("#salesChart").html()
                    salesChart.Line(salesChartData, salesChartOptions)

                    //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                    //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                    // console.log("begin out");
                    //var htmlContent = document.getElementById("salesChart").innerHTML="";
                    // console.log(htmlContent);
                    // console.log("end out ");
                    
                    //salesChart.Line(salesChartData, salesChartOptions)

                    //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                    //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                    //                    $("#loading").empty();
                },
                error: function (result) {
                    // var jsonMsg = JSON.parse();
                    alert("error");
                    alert(JSON.stringify(result));

                }
            // complete: function(XMLHttpRequest,textStatus){
            //                 $("#loading").empty();
            //             },
            // error: function(msg){
            //                 alert("error!");
            //                 alert("message is : "+msg);
            //                 $("#loading").empty();
            //             }

        })


        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        }







//奔驰
if (car_value=="配置"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })
        

        


        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        }


//保时捷
if (car_value=="操控"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }
    if (car_value=="舒适性"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }



    if (car_value=="油耗"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="动力"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }
    if (car_value=="内饰"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }
    if (car_value=="内饰"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="安全性"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }



    if (car_value=="空间"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="外观"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }
    if (car_value=="刹车"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }


    if (car_value=="品牌价值"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="百公里速度"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="邮箱容量"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

}
    )

}
)
=======

$(document).ready(function () {
    $("#submitBtn2").click(function () {
        //alert("end out ");
        //alert("success");

        // var c = document.getElementById("salesChart")
        // var cxt = c.getContext("2d")
        // c.height = c.height
        $('#salesChart').remove()
        $('#chart').append('<canvas id="salesChart"></canvas>');
        container=document.getElementById("salesChart");
        context=container.getContext("2d");
        // $("#select_car").on('change'.function){
        //     var objS = 
        // }
        //alert("success1");
        var objS=document.getElementById('select_car');
        var car_value=objS.options[objS.selectedIndex].value;
        //alert(car_value)
        //app.config.xAxis3D = xAxis3D_value;
        //app.config.onChange();
        //alert("success2");

        if (car_value=="价格"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
            var salesChartCanvas = c_canvas.getContext('2d')
            // This will get the first returned node in the jQuery collection.
            var salesChart = new Chart(salesChartCanvas);
            var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                    {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                    },
                    {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                    }
                ]
            };



            var carSalesUrl = "http://localhost:5000/carSales";
        //var sendMessage = "you have my invitation!";
            var content = car_value
            var data = {
                data: JSON.stringify({ 'car_value': content })
            };
        
        // console.log("debug 1");
            $.ajax({
                url: carSalesUrl,
                type: "POST",
                data: data,
                dataType: "json",
                success: function (result) {
                    //alert("success");
                    var jsonMsg = JSON.parse(JSON.stringify(result));
                    //alert(jsonMsg.data);
                    salesChartData.datasets[0].data = jsonMsg.data;
                    salesChartData.datasets[1].data = jsonMsg.data;
                    console.log(JSON.stringify(salesChartData.datasets));

                    //Create the line chart
                    //$("#salesChart").html()
                    salesChart.Line(salesChartData, salesChartOptions)

                    //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                    //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                    // console.log("begin out");
                    //var htmlContent = document.getElementById("salesChart").innerHTML="";
                    // console.log(htmlContent);
                    // console.log("end out ");
                    
                    //salesChart.Line(salesChartData, salesChartOptions)

                    //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                    //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                    //                    $("#loading").empty();
                },
                error: function (result) {
                    // var jsonMsg = JSON.parse();
                    alert("error");
                    alert(JSON.stringify(result));

                }
            // complete: function(XMLHttpRequest,textStatus){
            //                 $("#loading").empty();
            //             },
            // error: function(msg){
            //                 alert("error!");
            //                 alert("message is : "+msg);
            //                 $("#loading").empty();
            //             }

        })


        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        }







//奔驰
if (car_value=="配置"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })
        

        


        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        }


//保时捷
if (car_value=="操控"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }
    if (car_value=="舒适性"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }



    if (car_value=="油耗"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="动力"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }
    if (car_value=="内饰"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }
    if (car_value=="内饰"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="安全性"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }



    if (car_value=="空间"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="外观"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }
    if (car_value=="刹车"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }


    if (car_value=="品牌价值"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="百公里速度"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

    if (car_value=="邮箱容量"){
            //alert("success");
            var c_canvas = $('#salesChart').get(0);
        var salesChartCanvas = c_canvas.getContext('2d')
        // This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas);
        var salesChartData = {

            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    fillColor: '#dee2e6',
                    strokeColor: '#ced4da',
                    pointColor: '#ced4da',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgb(220,220,220)',
                    data: []
                },
                {
                    label: 'Digital Goods',
                    fillColor: 'rgba(0, 123, 255, 0.9)',
                    strokeColor: 'rgba(0, 123, 255, 1)',
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(0, 123, 255, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(0, 123, 255, 1)',
                    data: []
                }
            ]
        };



        var carSalesUrl = "http://localhost:5000/carSales";
        var content = car_value
        var data = {
            data: JSON.stringify({ 'car_value': content })
        };
        
        // console.log("debug 1");
        $.ajax({
            url: carSalesUrl,
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                //alert("success");
                var jsonMsg = JSON.parse(JSON.stringify(result));
                //alert(jsonMsg.data);
                salesChartData.datasets[0].data = jsonMsg.data;
                salesChartData.datasets[1].data = jsonMsg.data;
                console.log(JSON.stringify(salesChartData.datasets));

                //Create the line chart
                //$("#salesChart").html()
                salesChart.Line(salesChartData, salesChartOptions)

                //salesChartData.datasets[0].data = [90,100,90,100,90,100,90];
                //salesChartData.datasets[1].data = [100,90, 100, 90, 100, 90, 100];

                // console.log("begin out");
                //var htmlContent = document.getElementById("salesChart").innerHTML="";
                // console.log(htmlContent);
                // console.log("end out ");
                
                //salesChart.Line(salesChartData, salesChartOptions)

                //                    $("#displayerEmotion").html("Emotion: " + jsonMsg.emotion);
                //                    $("#displayerSubject").html("Subject: " + jsonMsg.subject);
                //                    $("#loading").empty();
            },
            error: function (result) {
                // var jsonMsg = JSON.parse();
                alert("error");
                alert(JSON.stringify(result));

            }
        })

        var salesChartOptions = {
            //Boolean - If we should show the scale at all
            showScale: true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: false,
            //String - Colour of the grid lines
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth: 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
            //Boolean - Whether the line is curved between points
            bezierCurve: true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot: false,
            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill: true,
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,
            //Boolean - whether to make the chart responsive to window resizing
            responsive: true
        }
        
        
    }

}
    )

}
)
>>>>>>> 14463ac21deeead396ced88a3c64d2ea318b4c0a
