$(function () {
   $("#chart").igDataChart({
        width: "100%",
        height: "400px",
        dataSource: data,
        title: "Financial Chart",
        horizontalZoomable: true,
        verticalZoomable: true,
        axes: [{
            type: "categoryX",
            label: "Date",
            name: "xAxis",
            title: "Date"
        }, {
            type: "numericY",
            name: "yAxis",
            title: "Price"
        }],
        series: [{
            type: "financial",
            displayType: "candlestick",
            closeMemberPath: "Close",
            highMemberPath: "High",
            lowMemberPath: "Low",
            openMemberPath: "Open",
            volumeMemberPath: "Volume",
            xAxis: "xAxis",
            yAxis: "yAxis",
            name: "indicatorSeries",
            title: "Financial Indicator Data",
            isHighlightingEnabled: true,
            isTransitionInEnabled: true,

        }]
    });


   $("#seriesType").change(function (e) {
       var seriesType = $("#seriesType").val();
       var thickness = 3;
       if (seriesType == "candlestick" ||
              seriesType == "priceChannelOverlay" ||
              seriesType == "bollingerBandsOverlay") {
           thickness = 1;
       }
       if (seriesType == "ohlc") {
           thickness = 2;
       }
       
        $("#chart").igDataChart("option", "series", [{name: "indicatorSeries",remove: true}]);
       
        if (seriesType == "ohlc" || seriesType == "candlestick") {
            $("#chart").igDataChart("option", "series", [{
                type: "financial",
                displayType: seriesType,
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                closeMemberPath: "Close",
                highMemberPath: "High",
                lowMemberPath: "Low",
                openMemberPath: "Open",
                volumeMemberPath: "Volume",
                thickness: thickness,
                xAxis: "xAxis",
                yAxis: "yAxis",
                name: "indicatorSeries",
                title: "Financial Indicator Data"
            }]);
        }
         else {
            $("#chart").igDataChart("option", "series", [{
                type: seriesType,
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                closeMemberPath: "Close",
                highMemberPath: "High",
                lowMemberPath: "Low",
                openMemberPath: "Open",
                volumeMemberPath: "Volume",
                thickness: thickness,
                xAxis: "xAxis",
                yAxis: "yAxis",
                name: "indicatorSeries",
                title: "Financial Indicator Data"
            }]);
        }
    });

    // Transition Duration Slider
   $("#transitionDurationSlider").slider({
       min: 0,
       max: 2000,
       value: 1000,
       step: 50,
       slide: function (event, ui) {
           $("#chart").igDataChart("option", "highlightingTransitionDuration", ui.value);
           $("#transitionDurationLabel").text(ui.value);
       }
   });

});