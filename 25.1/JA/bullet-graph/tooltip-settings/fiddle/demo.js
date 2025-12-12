$(function () {
    $("#bulletgraph_task1").igBulletGraph({
        height: "80px",
        width: "100%",
        showToolTip: true,
        ranges: [
            {
                name: '低',
                startValue: 0,
                endValue: 40,
                brush: "#F66656"
            },
            {
                name: '中',
                startValue: 40,
                endValue: 70,
                brush: "#FFDA30"
            },
            {
                name: '高',
                startValue: 70,
                endValue: 100,
                brush: "#72CA70"
            }
        ],
        formatLabel: function (evt, ui) {
            ui.label = ui.value + "h";
        },
        value: 60,
        targetValue: 80,
        targetValueBreadth: 6,
        transitionDuration: 500
    });

    $("#bulletgraph_task2").igBulletGraph({
        height: "80px",
        width: "100%",
        showToolTip: true,
        rangeToolTipTemplate: 'rangeToolTipTemplate',
        valueToolTipTemplate: 'valueToolTipTemplate',
        targetValueToolTipTemplate: 'targetValueToolTipTemplate',
        ranges: [
             {
                 name: '低',
                 startValue: 0,
                 endValue: 20,
                 brush: "#F66656"
             },
             {
                 name: '中',
                 startValue: 20,
                 endValue: 35,
                 brush: "#FFDA30"
             },
             {
                 name: '高',
                 startValue: 35,
                 endValue: 50,
                 brush: "#72CA70"
             }
        ],
        formatLabel: function (evt, ui) {
            ui.label = ui.value + "h";
        },
        valueName: "消費時間",
        maximumValue: 50,
        value: 23,
        targetValue: 40,
        targetValueBreadth: 6,
        transitionDuration: 500
    });
});