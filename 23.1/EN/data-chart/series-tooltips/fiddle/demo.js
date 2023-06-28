$(function () {
    $("#chart").igDataChart({
        dataSource: everyThreeYears,
        height: "400px",
        width: "100%",
        title: "Energy Production Per Country",
        subtitle: "The top five Total Primary Energy producers",
        axes: [{
            name: "Year",
            type: "categoryX",
            label: "Year",
            title: "Year",
            gap: 0.8,
        }, {
            name: "Volume",
            type: "numericY",
            title: "Quadrillion Btu"
        }],
        series: [{
            // showTooltip: true enables the default tooltips
            showTooltip: true,
            // if a custom tooltipTemplate is set,
            // the default tooltip will not be shown
            tooltipTemplate: "tooltipTemplate",
            name: "United States",
            title: "US",
            type: "column",
            valueMemberPath: "UnitedStates",
            xAxis: "Year",
            yAxis: "Volume",
            thickness: .01
        },
        {
            showTooltip: true,
            name: "China",
            title: "China",
            type: "column",
            valueMemberPath: "China",
            xAxis: "Year",
            yAxis: "Volume",
            thickness: .01
        },
        {
            showTooltip: true,
            name: "Russia",
            title: "Russia",
            type: "column",
            valueMemberPath: "Russia",
            xAxis: "Year",
            yAxis: "Volume",
            thickness: .01
        }, {
            showTooltip: true,
            name: "Saudi Arabia",
            title: "Saudi Arabia",
            type: "column",
            valueMemberPath: "SaudiArabia",
            xAxis: "Year",
            yAxis: "Volume",
            thickness: .01
        }, {
            showTooltip: true,
            name: "Canada",
            title: "Canada",
            type: "column",
            valueMemberPath: "Canada",
            xAxis: "Year",
            yAxis: "Volume",
            thickness: .01
        }],
        horizontalZoomable: true,
        verticalZoomable: true,
        windowResponse: "immediate"
    });
});