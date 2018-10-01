$(function () {
    $("#chartBubble").igDataChart({
        width: "100%",
        height: "300px",
        dataSource: agriculturalData,
        title: "U.S. Agricultural Production Per Year",
        subtitle: "Data from 1961-2007",
        axes: [{
            name: "xAxis",
            type: "numericX",
            interval: 10,
            title: "Year",
        }, {
            name: "yAxis",
            type: "numericY",
            title: "Billions of USD",
            maximumValue: 200000,

            formatLabel: function (val) {
                var bVal = (val / 1000),
                rounded = Math.round(bVal * 100) / 100;
                return "$" + rounded;
            }
        }],
        series: [{
            isDropShadowEnabled: true,
            useSingleShadow: false,
            shadowColor: "#666666",
            title: "(Year, Production), Population",
            name: "bubble",
            type: "bubble",
            xAxis: "xAxis",
            yAxis: "yAxis",
            xMemberPath: "Year",
            yMemberPath: "Value",
            radiusMemberPath: "Population",
            showTooltip: true,
            markerBrush: "rgba(68,172,214,0.7)",
            radiusScale: {
                minimumValue: 30,
                maximumValue: 50,
                isLogarithmic: true
            },
        }],
        horizontalZoomable: true,
        verticalZoomable: true,
        windowResponse: "immediate"
    });

    $("#chartLine").igDataChart({
        width: "100%",
        height: "300px",
        dataSource: data,
        rightMargin: 35,
        title: "U.K. vs. France",
        subtitle: "A comparison of populations over time",
        axes: [{
            name: "xAxis",
            type: "categoryX",
            label: "Date",
            isInverted: true,
            interval: 2,
            title: "Year"
        },
        {
            name: "yAxis",
            type: "numericY",
            interval: 5,
            minimumValue: 45,
            title: "Millions of People"
        }],
        series: [{
            isDropShadowEnabled: true,
            shadowOffsetX: 0,
            shadowOffsetY: 3,
            useSingleShadow: false,
            shadowColor: "#666666",
            name: "ukPop",
            type: "line",
            title: "UK",
            isTransitionInEnabled: true,
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: "ukPopulation",
            showTooltip: true,
            thickness: 5
        }, {
            isDropShadowEnabled: true,
            shadowOffsetX: 0,
            shadowOffsetY: 3,
            useSingleShadow: false,
            shadowColor: "#666666",
            name: "frPop",
            type: "line",
            title: "France",
            isTransitionInEnabled: true,
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: "francePopulation",
            showTooltip: true,
            thickness: 5
        }],
        horizontalZoomable: true,
        verticalZoomable: true,
        windowResponse: "immediate"
    });
});