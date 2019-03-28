$(function () {

    var data = [
        { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
        { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
        { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
        { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
        { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
    ];

    $("#chart").igDataChart({
        width: "600px",
        height: "400px",
        legend: { element: "lineLegend" },
        title: "Population per Country",
        subtitle: "A comparison of population in 1995 and 2005",
        overviewPlusDetailPaneVisibility: "visible",
        horizontalZoomable: true,
        verticalZoomable: true,
        dataSource: data,
        axes: [
            {
                name: "NameAxis",
                type: "categoryX",
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
               name: "Pop1995",
               type: "column",
               title: "1995",
               xAxis: "NameAxis",
               yAxis: "PopulationAxis",
               valueMemberPath: "Pop1995",
               isTransitionInEnabled: true,
               isHighlightingEnabled: true,
               thickness: 1
           },
           {
                name: "Pop2005",
                type: "column",
                title: "2005",
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "Pop2005",
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                thickness: 1
            },
            {
                name: "Pop2015",
                type: "column",
                title: "2015",
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "Pop2015",
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                thickness: 1
            },
            {
                name: "Pop2025",
                type: "column",
                title: "2025",
                xAxis: "NameAxis",
                yAxis: "PopulationAxis",
                valueMemberPath: "Pop2025",
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                thickness: 1
            }
            ]
    });

    $("#selectDefault").change(function (e) {
        $("#chart").igDataChart("option", "defaultInteraction", $(this).val());
    });

    $("#selectPanModifier").change(function (e) {
        $("#chart").igDataChart("option", "panModifier", $(this).val());
    });

    $("#selectDragModifier").change(function (e) {
        $("#chart").igDataChart("option", "dragModifier", $(this).val());
    });

    $("#enableVerticalZooming").click(function (e) {
        var verticalZoomingChecked = $(this).is(":checked");
        $("#chart").igDataChart("option", "verticalZoomable", verticalZoomingChecked);
        $("#verticalZoomSlider").slider("option", "disabled", !verticalZoomingChecked);
    });

    $("#enableHorizontalZooming").click(function (e) {
        var horizontalZoomingChecked = $(this).is(":checked");
        $("#chart").igDataChart("option", "horizontalZoomable", horizontalZoomingChecked);
        $("#horizontalZoomSlider").slider("option", "disabled", !horizontalZoomingChecked);
    });

    $("#enablePane").click(function (e) {
        var visibility = ($(this).is(":checked")) ? "visible" : "collapsed";
        $("#chart").igDataChart("option", "overviewPlusDetailPaneVisibility", visibility);
        $("#chart").igDataChart("styleUpdated");
    });

    $("#verticalZoomSlider").slider({
        min: 0.0001,
        max: 1,
        value: 1,
        step: 0.0001,
        slide: function (e, ui) {
            if ($('#enableVerticalZooming').is(":checked"))
                $("#chart").igDataChart("option", "windowScaleVertical", ui.value);
        }
    });

    $("#horizontalZoomSlider").slider({
        min: 0.0001,
        max: 1,
        value: 1,
        step: 0.0001,
        slide: function (e, ui) {
            if ($('#enableHorizontalZooming').is(":checked"))
                $("#chart").igDataChart("option", "windowScaleHorizontal", ui.value);
        }
    });
    
});