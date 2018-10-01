$(function () {
    var currData, currDataSource, doGeneration, startTime = null;
    var sliderValue = 50000;

    function doGeneration() {
        var num = sliderValue, data = [], curr = 10;

        for (var i = 0; i < num; i++) {
            if (Math.random() > .5) {
                curr += Math.random() * 2.0;
            } else {
                curr -= Math.random() * 2.0;
            }
            var val1 = Math.round(curr * 1000.0) / 1000.0;
            data[i] = { Label: i.toString(), Value: val1 };
        }
        currData = data;
    }

    function assignData() {
        startTime = new Date().getTime();
        $("#chart").igDataChart({
            dataSource: currData
        });
    };

    $(function () {
        $("#btnRefresh").click(function () {
            doGeneration();
            assignData();
        });

        $("#slider").slider({
            min: 50000,
            max: 1000000,
            step: 50000,
            value: 50000,
            slide: function (event, ui) {
                sliderValue = ui.value;
                $("#sliderLabel").text(ui.value);
            }
        });

        $("#chart").igDataChart({
            width: "100%",
            height: "500px",
            title: "Random Generated Data",
            axes: [{
                name: "xAxis",
                type: "categoryX",
                label: "Label"
            }, {
                name: "yAxis",
                type: "numericY"
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
                tooltipTemplate: "tooltipTemplate"
            }],
            horizontalZoomable: true,
            verticalZoomable: true,
            windowResponse: "immediate"
        });

        $(document).on("igdatachartrefreshcompleted", "#chart", function () {
            if (startTime) {
                var time = new Date().getTime() - startTime;
                $("#timeText").text(time.toString() + " ms");
                startTime = null;
            }
        });

        doGeneration();
        assignData();
        $(".message").hide();
    });
});