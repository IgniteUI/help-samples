$(function () {
    var data = [
       { "ID": 1, "dataMode": "date" },
       { "ID": 2, "dataMode": "editModeText" },
       { "ID": 3, "dataMode": "displayModeText" }
    ];

    $(function () {
        $("#datePicker1").igDatePicker({
            minValue: new Date(2015, 6, 1),
            dateDisplayFormat: "yy/MM/dd dddd"
        });

        $("#datePicker2").igDatePicker({
            maxValue: new Date(2018, 8, 8),
            dateDisplayFormat: "yy/MM/dd dddd"
        });

        $("#dataModeCombo").igCombo({
            dataSource: data,
            valueKey: "ID",
            textKey: "dataMode",
            placeHolder: "change dataMode",
            enableClearButton: false,
            mode: "dropdown",
            initialSelectedItems: [{ index: 0 }],
            selectionChanged: function (evt, ui) {
            	var selectedMode = ui.items[0].data.dataMode,
            		value1, value2;
				
            	value1 = $("#datePicker1").igDatePicker("value");
                $("#datePicker1").igDatePicker("option", "dataMode", selectedMode);
                $("#datePicker1").igDatePicker("value", value1);
                value2 = $("#datePicker2").igDatePicker("value");
                $("#datePicker2").igDatePicker("option", "dataMode", selectedMode);
                $("#datePicker2").igDatePicker("value", value2);
            }
        });

        var headers = $('.group-fields label');
        $("#form").submit(function (event) {
            var submittedValues = $("#form").serializeArray();
            $(".p").remove();
            for (var i = 0 ; i < submittedValues.length; i++) {
                $("#results").append("<p class='p'><span class='header'>" + headers[i].textContent + ": " + "</span>  <strong>" + submittedValues[i].value + "</strong></p>");
            }
            return false;
        });
    });
});