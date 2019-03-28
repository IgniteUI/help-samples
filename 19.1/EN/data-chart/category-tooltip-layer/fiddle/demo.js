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
        subtitle: "A comparison of population in 1995 and 2005",
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
                name: "2005Population",
                type: "column",
                title: "2005 Population",
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "Pop2005",
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                showTooltip: true
            },
            {
                name: "1995Population",
                type: "column",
                title: "1995 Population",
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "Pop1995",
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                showTooltip: true
            },
            {
                name: "categorySeries",
                type: "categoryToolTipLayer",
                useInterpolation: false,
                transitionDuration: 150
            }]
    });

    //Transition Duration Slider
    $("#transitionDurationSlider").slider({
        min: 0,
        max: 1000,
        value: 150,
        step: 50,
        slide: function (event, ui) {
            $("#chart").igDataChart("option", "series", [{ name: "categorySeries", transitionDuration: ui.value }]);
            $("#transitionDurationLabel").text(ui.value);
        }
    });

    //Use Interpolation
    $("#useInterpolationCheckBox").click(function (e) {
        var useInterpolationResult = $("#useInterpolationCheckBox").is(":checked") ? true : false;
        $("#chart").igDataChart("option", "series", [{ name: "categorySeries", useInterpolation: useInterpolationResult }]);
    });
    
    $("#tooltipPos").change(function (e) {
       var position = $(this).val();
       $("#chart").igDataChart("option", "series", [{ name: "categorySeries", toolTipPosition: position }]);
        
    });
    
});