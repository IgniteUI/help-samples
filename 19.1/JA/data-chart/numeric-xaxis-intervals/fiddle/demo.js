$(function () {
    var transparentBrush = "rgba(0,0,0,0)";
    var brush;

    function createScatterChart(dataSource) {
        $("#chartScatterLine").igDataChart({
            width: "450px",
            height: "400px",
            dataSource: dataSource,
            title: "年の米国農業生産",
            subtitle: "1961 年 - 2007 年のデータ",
            axes: [{
                name: "xAxis",
                type: "numericX",
                title: "年",

                majorStroke: "Green",
                minorStroke: 'Red',
                minorInterval: 2,
                interval: 10,
                majorStrokeThickness: 2,

            }, {
                name: "yAxis",
                type: "numericY",
                title: "合計農業生産 (USD 10 億単位)",
                majorStroke: "Green",
                minorStroke: 'Red',
                minorInterval: 5000,
                interval: 10000,
                maximumValue: 200000,
                formatLabel: function (val) {
                    var bVal = (val / 1000),
                    rounded = Math.round(bVal * 100) / 100;
                    return "$" + rounded;
                }
            }],
            series: [{
                name: "scatter",
                type: "scatterLine",
                xAxis: "xAxis",
                yAxis: "yAxis",
                xMemberPath: "Year",
                yMemberPath: "Value",
                markerType: "circle",
            }],
            horizontalZoomable: true,
            verticalZoomable: true,
            windowResponse: "immediate"
        })
    };

    $("#xAxisMajorLinesCkBx").click(function (e) {
        brush = $("#xAxisMajorLinesCkBx").is(":checked") ? "Green" : transparentBrush;
        $("#chartScatterLine").igDataChart("option", "axes", [{ name: "xAxis", majorStroke: brush }]);
        $("#chartScatterLine").igDataChart("styleUpdated");
    });

    $("#xAxisMinorLinesCkBx").click("change", function () {
        brush = ($(this).is(":checked")) ? "Red" : transparentBrush;
        $("#chartScatterLine").igDataChart("option", "axes", [{ name: "xAxis", minorStroke: brush }]);
        $("#chartScatterLine").igDataChart("styleUpdated");
    });

    $("#yAxisMajorLinesCkBx").click("change", function () {
        brush = ($(this).is(":checked")) ? "Green" : transparentBrush;
        $("#chartScatterLine").igDataChart("option", "axes", [{ name: "yAxis", majorStroke: brush }]);
        $("#chartScatterLine").igDataChart("styleUpdated");
    });

    $("#yAxisMinorLinesCkBx").click("change", function () {
        brush = ($(this).is(":checked")) ? "Red" : transparentBrush;
        $("#chartScatterLine").igDataChart("option", "axes", [{ name: "yAxis", minorStroke: brush }]);
        $("#chartScatterLine").igDataChart("styleUpdated");
    });

    $("#XMajorIntervalThicknessSlider").slider({
        min: 1,
        max: 10,
        value: 2,
        slide: function (e, ui) {
            $("#chartScatterLine").igDataChart("option", "axes", [{ name: "xAxis", majorStrokeThickness: ui.value }]);
            $("#XMajorIntervalThicknessLbl").text("XMajorIntervalThickness: " + ui.value);
        }
    });

    $("#XMinorIntervalThicknessSlider").slider({
        min: 1,
        max: 10,
        value: 1,
        slide: function (e, ui) {
            $("#chartScatterLine").igDataChart("option", "axes", [{ name: "xAxis", minorStrokeThickness: ui.value }]);
            $("#XMinorIntervalThicknessLbl").text("XMinorIntervalThickness: " + ui.value);
        }
    });

    $("#YMajorIntervalThicknessSlider").slider({
        min: 1,
        max: 10,
        value: 2,
        slide: function (e, ui) {
            $("#chartScatterLine").igDataChart("option", "axes", [{ name: "yAxis", majorStrokeThickness: ui.value }]);
            $("#YMajorIntervalThicknessLbl").text("YMajorIntervalThickness: " + ui.value);
        }
    });

    $("#YMinorIntervalThicknessSlider").slider({
        min: 1,
        max: 10,
        value: 1,
        slide: function (e, ui) {
            $("#chartScatterLine").igDataChart("option", "axes", [{ name: "yAxis", minorStrokeThickness: ui.value }]);
            $("#YMinorIntervalThicknessLbl").text("YMinorIntervalThickness: " + ui.value);
        }
    });

    $("#XMinorIntervalValueSlider").slider({
        min: 1,
        max: 10,
        value: 2,
        slide: function (e, ui) {
            $("#chartScatterLine").igDataChart("option", "axes", [{ name: "xAxis", minorInterval: ui.value }]);
            $("#XMinorIntervalValueLbl").text("XMinorIntervalValue: " + ui.value);
        }
    });
    $("#YMinorIntervalValueSlider").slider({
        min: 1,
        max: 10,
        value: 5,
        slide: function (e, ui) {
            $("#chartScatterLine").igDataChart("option", "axes", [{ name: "yAxis", minorInterval: (ui.value * 1000) }]);
            $("#YMinorIntervalValueLbl").text("YMinorIntervalValue: " + (ui.value * 1000));
        }
    });
     
        var dataSource = agriculturalData;
        createScatterChart(dataSource);
});