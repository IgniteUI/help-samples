$(function () {

    // --------- en-US ----------
    $("#enUsDatePicker").igDatePicker({
        width: "260px",
        value: new Date(),
        readOnly: true,
        dropDownOnReadOnly: true,
        dateDisplayFormat: "dateLong",
        regional: "en-US"
    });

    $("#enUsTimeEditor").igDateEditor({
        width: 100,
        value: new Date(),
        dateInputFormat: "timeLong",
        dateDisplayFormat: "timeLong",
        regional: "en-US"
    });

    $("#enUsCurrencyEditor").igCurrencyEditor({
        width: 100,
        value: 86753.09,
        regional: "en-US"
    }); // ----- END en-US -----


    // --------- ja ----------
    $("#jaDatePicker").igDatePicker({
        width: "260px",
        value: new Date(),
        readOnly: true,
        dropDownOnReadOnly: true,
        dateDisplayFormat: "dateLong",
        regional: "ja"
    });

    $("#jaTimeEditor").igDateEditor({
        width: 100,
        value: new Date(),
        dateInputFormat: "timeLong",
        dateDisplayFormat: "timeLong",
        regional: "ja"
    });

    $("#jaCurrencyEditor").igCurrencyEditor({
        width: 100,
        value: 86753.09,
        regional: "ja"
    }); // ----- END ja -----

    // --------- ta ----------
    $("#taDatePicker").igDatePicker({
        width: "260px",
        value: new Date(),
        readOnly: true,
        dropDownOnReadOnly: true,
        dateDisplayFormat: "dateLong",
        regional: "ta"
    });

    $("#taTimeEditor").igDateEditor({
        width: 100,
        value: new Date(),
        dateInputFormat: "timeLong",
        dateDisplayFormat: "timeLong",
        regional: "ta"
    });

    $("#taCurrencyEditor").igCurrencyEditor({
        width: 100,
        value: 86753.09,
        regional: "ta"
    }); // ----- END ta -----

});