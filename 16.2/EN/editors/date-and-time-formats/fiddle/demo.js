$(function () {

    $("#defaultDateEditor").igDateEditor({
        width: 200,
        value: new Date(2015, 9, 9)
    });

    $("#dateTimeEditor").igDateEditor({
        width: 200,
        dateInputFormat: "dateTime",
        value: new Date(2015, 9, 9, 9, 9)
    });

    $("#timeEditor").igDateEditor({
        width: 200,
        dateInputFormat: "time",
        value: new Date(2015, 9, 9, 9, 9)
    });

    $("#constraintEditor").igDateEditor({
        width: 200,
        minValue: new Date(2012, 9, 24),
        maxValue: new Date(2018, 9, 24),
        value: new Date(2015, 9, 9),
        nullText: "Enter Today's Date",
        unfilledCharsPrompt: " "
    });

});