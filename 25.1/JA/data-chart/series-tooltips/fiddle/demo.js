$(function () {
    $("#chart").igDataChart({
        dataSource: everyThreeYears,
        height: "400px",
        width: "100%",
        title: "国別エネルギー生産量",
        subtitle: "総一次エネルギー生産国トップ 5 ",
        axes: [{
            name: "Year",
            type: "categoryX",
            label: "Year",
            title: "年",
            gap: 0.8,
        }, {
            name: "Volume",
            type: "numericY",
            title: "生産されたエネルギー (BTU 40 億単位)"
        }],
        series: [{
            // showTooltip: true enables the default tooltips
            showTooltip: true,
            // if a custom tooltipTemplate is set,
            // the default tooltip will not be shown
            tooltipTemplate: "tooltipTemplate",
            name: "United States",
            title: "アメリカ",
            type: "column",
            valueMemberPath: "UnitedStates",
            xAxis: "Year",
            yAxis: "Volume",
            thickness: .01
        },
        {
            showTooltip: true,
            name: "China",
            title: "中国",
            type: "column",
            valueMemberPath: "China",
            xAxis: "Year",
            yAxis: "Volume",
            thickness: .01
        },
        {
            showTooltip: true,
            name: "Russia",
            title: "ロシア",
            type: "column",
            valueMemberPath: "Russia",
            xAxis: "Year",
            yAxis: "Volume",
            thickness: .01
        }, {
            showTooltip: true,
            name: "Saudi Arabia",
            title: "サウジアラビア",
            type: "column",
            valueMemberPath: "SaudiArabia",
            xAxis: "Year",
            yAxis: "Volume",
            thickness: .01
        }, {
            showTooltip: true,
            name: "Canada",
            title: "カナダ",
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