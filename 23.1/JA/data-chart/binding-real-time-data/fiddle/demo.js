$(function () {
    var lblCount = 30, timer = 40, interval, isAdding = false;

    $(function () {
 
        var currData = null,
            doGeneration = null,
            startTime = null,
            doUpdate = null,
            started = false,
            intervalId = 0,
            toggleFeed = null,
            curr = 10,
            i = 0,
            refreshCount = 0;

        doGeneration = function() {
            var num = 5000, data = [];
            num = parseInt($("#volumeText").text());

            for (i = 0; i < num; i++) {
                if (Math.random() > .5) {
                    curr += Math.random() * 2.0;
                } else {
                    curr -= Math.random() * 2.0;
                }
                var val1 = Math.round(curr * 1000.0) / 1000.0;
                data[i] = { Label: i.toString(), Value: val1 };
            }
            currData = data;
        };

        doGeneration();
        $("#chart").igDataChart({
            width: "90%",
            height: "500px",
            horizontalZoomable: true,
            verticalZoomable: true,
            windowResponse: "immediate",
            dataSource: currData,
            pixelScalingRatio: 1.0,
            axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Label",
                    labelExtent: 30,
                }, {
                    name: "yAxis",
                    type: "numericY",
                    labelExtent: 50,
                }],
            series: [{
                name: "series1",
                title: "Test Series",
                type: "line",
                xAxis: "xAxis",
                yAxis: "yAxis",
                valueMemberPath: "Value",
                showTooltip: true,
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                tooltipTemplate: "tooltipTemplate",
            }],
          });
    
        $("#chart").bind("igdatachartrefreshcompleted", function () {
            refreshCount++;
        });

        $("#addDataPoints").click(function () {
            doGeneration();

            $("#chart").igDataChart({
                dataSource: currData
            });
        });
        toggleFeed = function(changeButton) {
            var updateTicks = 33;
            updateTicks = parseInt($("#intervalText").text());
            if (!started) {
                started = true;
                if (changeButton) {
                    $("#startDataFeed").igButton({ labelText: 'データ フィードの中止' });
                    $("#addDataPoints").attr("disabled", "disabled");
                }
                intervalId = window.setInterval(function() {
                    doUpdate();
                }, updateTicks);
            } else {
                started = false;
                if (changeButton) {
                    $("#startDataFeed").igButton({ labelText: 'データ フィードの開始' });
                    $("#addDataPoints").removeAttr("disabled");
                }
                window.clearInterval(intervalId);
            }
        };

        $("#startDataFeed").click(function () {
            toggleFeed(true);
        });

        $("#addDataPoints").igButton({ labelText: $("#addDataPoints").val() });
        $("#startDataFeed").igButton({ labelText: $("#startDataFeed").val() });

        $("#volumeSlider").slider({
            slide: function (event, ui) {
                $("#volumeText").text(ui.value.toString());
            },
            min: 100,
            max: 50000,
            value: 5000,
            step: 100
        });

        $("#intervalSlider").slider({
            slide: function (event, ui) {
                $("#intervalText").text(ui.value.toString());
                toggleFeed(false);
                toggleFeed(false);
            },
            min: 10,
            max: 1000,
            value: 10,
            step: 10
        });

        doUpdate = function() {
            if (Math.random() > .5) {
                curr += Math.random() * 2.0;
            } else {
                curr -= Math.random() * 2.0;
            }
            var newData = { Label: i.toString(), Value: curr };
            i++;
            currData.push(newData);
            $("#chart").igDataChart("notifyInsertItem", currData, currData.length - 1, newData);
            var oldItem = currData.shift();
            $("#chart").igDataChart("notifyRemoveItem", currData, 0, oldItem);
        };

        window.setInterval(function () {
            var refreshesPerSecond = refreshCount / 2;
            refreshCount = 0;
            $("#refreshCount").text(refreshesPerSecond);
        }, 2000);

        
    });
});