$(function () {
    $("#chart").igDataChart({
        width: "100%",
        height: "400px",
        dataSource: data,
        title: "Los Angeles wind data over twelve hours",
        horizontalZoomable: true,
        verticalZoomable: true,
        windowResponse: "immediate",
        axes: [{
            name: "xAxis",
            type: "categoryX",
            label: "Time"
        },
            {
                name: "yAxis",
                type: "numericY",
                maximumValue: 10,
                title: "Wind Speed (mph)",
            }],
        series: [{
            brush: {
                type: "linearGradient",
                colorStops: [{
                    color: "#2788B1",
                    offset: 0
                },
                {
                    color: "#A4BA29",
                    offset: 0.3
                },
                {
                    color: "#FDBD48",
                    offset: .6
                },
                {
                    color: "#D3404B",
                    offset: .9
                }],
                // optional:
                startPoint: { x: 0, y: 1 },
                endPoint: { x: 0, y: 0 }
                // if start/endPoint are not specified, the default direction is top-bottom
            },
            outline: {
                type: "linearGradient",
                colorStops: [{
                    color: "#2788B1",
                    offset: 0
                },
                {
                    color: "#A4BA29",
                    offset: 0.3
                },
                {
                    color: "#FDBD48",
                    offset: .6
                },
                {
                    color: "#D3404B",
                    offset: .9
                }],
                startPoint: { x: 0, y: 1 },
                endPoint: { x: 0, y: 0 }
            },
            areaFillOpacity: .9,
            name: "series1",
            type: "splineArea",
            xAxis: "xAxis",
            yAxis: "yAxis",
            isHighlightingEnabled: true,
            isTransitionInEnabled: true,
            valueMemberPath: "WindSpeed"
        }],
     });
});