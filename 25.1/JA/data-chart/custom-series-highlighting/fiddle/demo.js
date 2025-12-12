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
        subtitle: "2005 年の人口",
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
                title: "人口 (百万人単位)",
            }
        ],

        series: [{
          name: "2005Population",
          type: "column",
          title: "2005 Population",  
          isHighlightingEnabled: true,
          isTransitionInEnabled: true,
          xAxis: "NameAxis",
          yAxis: "PopulationAxis",
          valueMemberPath: "Pop2005",
          showTooltip: true,
          isCustomCategoryStyleAllowed: true,
          isAssigningCategoryStyleAssigned: true
        }],
        
        horizontalZoomable: true,
        assigningCategoryStyle: function (e, ui) {
            var minOpacity = .3, opacity = 1.0, curr;
            if (ui.sumAllSeriesHighlightingProgress > 0.0) {
                var progress = 0;
                if (ui.highlightingInfo !== null) {
                    progress = ui.highlightingInfo.progress;
                }

                progress = progress - ui.sumAllSeriesHighlightingProgress;

                opacity = minOpacity + (1.0 + progress) * (1.0 - minOpacity);
                ui.opacity = opacity;
                ui.highlightingHandled = true;

                
            }
        },
        verticalZoomable: true,
        windowResponse: "immediate"
    });
    
    // Transiton Duration Slider
    $("#transitionDurationSlider").slider({
        min: 0,
        max: 5,
        step: 0.01,
        value: 2,
        slide: function (event, ui) {
            $("#chart").igDataChart("option", "highlightingTransitionDuration", ui.value * 1000 );
            $("#transitionDurationLabel").text(ui.value);
        }
    });
});