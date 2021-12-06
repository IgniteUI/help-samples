$(function () {

    var data = [
        { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
        { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
        { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
        { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
        { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
    ];

    $("#chart").igDataChart({
        width: "100%",
        height: "400px",
        title: "国別人口",
        subtitle: "2015 年推計人口トップ 5",
        dataSource: data,
        axes: [
            {
                name: "NameAxis",
                type: "categoryX",
                title: "国",
                label: "CountryName"
            },
            {
                name: "PopulationAxis",
                type: "numericY",
                minimumValue: 0,
                title: "予期人口 (百万人単位)",
            }
        ],
        series: [
            {
                name: "2015Population",
                type: "column",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "Pop2015"
            }
        ]
    });

});