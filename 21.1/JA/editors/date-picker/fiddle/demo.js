$(function () {
    $("#datePicker1").igDatePicker({
        value: new Date(2017, 11, 8),
        dataMode: "date",
        dateDisplayFormat: "yyyy/MM/dd dddd" 
    });

    $("#datePicker2").igDatePicker({
        value: new Date(2017, 11, 8),
        dataMode: "editModeText",
        dateDisplayFormat: "yyyy/MM/dd dddd"
    });

    $("#datePicker3").igDatePicker({
        value: new Date(2017, 11, 8),
        dataMode: "displayModeText",
        dateDisplayFormat: "yyyy/MM/dd dddd" 
    });

    var headers = $('.group-fields label');
    $("#form").submit(function (event) {
        var submittedValues = $(this).serializeArray(),
            $results = $("#results");
        $results.empty();
        for (var i = 0 ; i < submittedValues.length; i++) {
            $results.append("<p class='p'><span class='header'>" + headers[i].textContent + ": " + "</span>  <strong>" + submittedValues[i].value + "</strong></p>");
        }
        return false;
    });
});