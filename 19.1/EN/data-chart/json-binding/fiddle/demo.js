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
        title: "Population per Country",
        subtitle: "Five largest projected populations for 2015",
        dataSource: data,
        axes: [
            {
                name: "NameAxis",
                type: "categoryX",
                title: "Country",
                label: "CountryName"
            },
            {
                name: "PopulationAxis",
                type: "numericY",
                minimumValue: 0,
                title: "Millions of People",
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