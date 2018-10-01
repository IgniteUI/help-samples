$(function () {

    // Used to show output in the API Viewer at runtime, 
    // defined in external script 'apiviewer.js'    
    var apiViewer = new $.ig.apiViewer();

    /*----------------- Method & Option Examples -------------------------*/
    
    // process events of buttons
    $("#changeNeedleValue").on({
        click: function (e) {
            var needleValue = parseFloat($("#needleValue").val());
            if (!needleValue || isNaN(needleValue)) {
                needleValue = 0;
            }
            needleValue = Math.min(Math.max(needleValue, 0), 100);
            $("#radialGauge").igRadialGauge("option", "value", needleValue);
            $("#needleValue").val(needleValue);
        }
    });
          
    var prevValue = null;
    $("#getNeedleValue").on({
        click: function (e) {
            var needleValue = $("#radialGauge").igRadialGauge("option", "value");
            if (prevValue == null || prevValue != needleValue) {
                apiViewer.log("現在の針値: " + needleValue);
                prevValue = needleValue;
            }
        }
    });
              
    /*----------------- Instantiation -------------------------*/

    $("#radialGauge").igRadialGauge({
        height: "500px",
        transitionDuration: "1500",
        width: "100%"                
    });

    function isAndroid() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    }

    $("#radialGauge").igRadialGauge("option", "value", 0);
    $("#needleValue").val(0);
});