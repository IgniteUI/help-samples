$(function () {

    $("#defaultDateEditor").igDateEditor({
        value: new Date(2015, 9, 9)
    });

    $("#dateTimeEditor").igDateEditor({
        dateInputFormat: "dateTime",
        value: new Date(2015, 9, 9, 9, 9)
    });

    $("#timeEditor").igDateEditor({
        dateInputFormat: "time",
        value: new Date(2015, 9, 9, 9, 9)
    });

    $("#constraintEditor").igDateEditor({
        dateInputFormat: "MM/dd/yyyy",
        dateDisplayFormat: "dddd, MMM d, yyyy",
        minValue: new Date(2012, 9, 24),
        maxValue: new Date(2017, 9, 24),
        value: new Date(2017, 9, 9)
    });

    $("#setMax").igButton({
        click: function () {
            $("#constraintEditor").igDateEditor("value", new Date(2018, 9, 26));
        }
    });
});