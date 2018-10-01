$(function () {
    $("#radialgauge").igRadialGauge({
        height: "350px",
        width: "100%",
        transitionDuration: "1500",
        value: "10"
    });


    // Label Extent
    $("#labelExtentSlider").slider({
        min: 0,
        max: 1,
        step: 0.01,
        value: 0.7,
        slide: function (event, ui) {
            $("#radialgauge").igRadialGauge("option", "labelExtent", ui.value);
            $("#labelExtentLabel").text(ui.value);
        }
    });

    // Label Interval
    $("#labelIntervalSlider").slider({
        min: 0,
        max: 100,
        value: 10,
        slide: function (event, ui) {
            $("#radialgauge").igRadialGauge("option", "labelInterval", ui.value);
            $("#labelIntervalLabel").text(ui.value);
        }
    });

    // Transiton Duration Slider
    $("#transitionDurationSlider").slider({
        min: 0,
        max: 5,
        step: 0.01,
        value: 2,
        slide: function (event, ui) {
            $("#radialgauge").igRadialGauge("option", "transitionDuration", ui.value * 1000);
            $("#transitionDurationLabel").text(ui.value);
        }
    });
});