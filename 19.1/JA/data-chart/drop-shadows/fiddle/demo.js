$(function () {
    $("#chartBubble").igDataChart({
        width: "100%",
        height: "300px",
        dataSource: agriculturalData,
        title: "年の米国農業生産",
        subtitle: "1961 年 - 2007 年のデータ",
        axes: [{
            name: "xAxis",
            type: "numericX",
            interval: 10,
            title: "年",
        }, {
            name: "yAxis",
            type: "numericY",
            title: "合計農業生産 (USD 10 億単位)",
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
            title: "(年, 生産), 人口",
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
        title: "U.K. vs. フランス",
        subtitle: "人口の比較 (年)",
        axes: [{
            name: "xAxis",
            type: "categoryX",
            label: "Date",
            isInverted: true,
            interval: 2,
            title: "年"
        },
        {
            name: "yAxis",
            type: "numericY",
            interval: 5,
            minimumValue: 45,
            title: "人口 (百万人単位)"
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