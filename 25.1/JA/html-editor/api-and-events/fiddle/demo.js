$(function () {

    // Used to show output in the API Viewer at runtime, 
    // defined in external script 'apiviewer.js'    
    var apiViewer = new $.ig.apiViewer();

    /*----------------- Event Examples -------------------------*/

    $("#htmlEditor").on("ightmleditorrendering", function (evt, ui) {
        var message = "ightmleditorrendering";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditorrendered", function (evt, ui) {
        var message = "ightmleditorrendered";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditoractionexecuting", function (evt, ui) {
        var message = "ightmleditoractionexecuting";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditoractionexecuted", function (evt, ui) {
        var message = "ightmleditoractionexecuted";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditortoolbarcollapsing", function (evt, ui) {
        var message = "ightmleditortoolbarcollapsing";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditortoolbarcollapsed", function (evt, ui) {
        var message = "ightmleditortoolbarcollapsed";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditortoolbarexpanding", function (evt, ui) {
        var message = "ightmleditortoolbarexpanding";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditortoolbarexpanded", function (evt, ui) {
        var message = "ightmleditortoolbarexpanded";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditorcut", function (evt, ui) {
        var message = "ightmleditortoolbarcut";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditorcopy", function (evt, ui) {
        var message = "ightmleditortoolbarcopy";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditorpaste", function (evt, ui) {
        var message = "ightmleditortoolbarpaste";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditorundo", function (evt, ui) {
        var message = "ightmleditortoolbarundo";
        apiViewer.log(message);
    });

    $("#htmlEditor").on("ightmleditorredo", function (evt, ui) {
        var message = "ightmleditorredo";
        apiViewer.log(message);
    });

    $("#standardText").on("click", function () {
        var currentHtml = $("#htmlEditor").igHtmlEditor("getContent", "html");
        $("#htmlEditor").igHtmlEditor("setContent", currentHtml + "これは標準の文字です", "html");
    });

    $("#emphasize").on("click", function () {
        $("#htmlEditor").igHtmlEditor("executeAction", "bold");
        $("#htmlEditor").igHtmlEditor("executeAction", "italic");
        $("#htmlEditor").igHtmlEditor("executeAction", "foreColor", "red");
    });

    $("#print").on("click", function () {
        var focusAndPrintType = "function";
        if ($.ig.util.isIE8) {
            focusAndPrintType = "object"
        }
        if (typeof document.getElementById("htmlEditor_editor").focus === focusAndPrintType) {
            document.getElementById("htmlEditor_editor").focus();
        }
        if (typeof document.getElementById("htmlEditor_editor").print === focusAndPrintType) {
            document.getElementById("htmlEditor_editor").print();
        }
        if (typeof document.getElementById("htmlEditor_editor").contentWindow.focus === focusAndPrintType) {
            document.getElementById("htmlEditor_editor").contentWindow.focus();
        }
        if (typeof document.getElementById("htmlEditor_editor").contentWindow.print === focusAndPrintType) {
            document.getElementById("htmlEditor_editor").contentWindow.print();
        }
    });

    /*----------------- Instantiation -------------------------*/
    $("#standardText").igButton();
    $("#emphasize").igButton();
    $("#print").igButton();

    var height = $('html').hasClass('touch') ? 500 : 350;

    $("#htmlEditor").igHtmlEditor({
        width: "98%",
        height: height
    });

    $("#htmlEditor").igHtmlEditor("setContent", "", "html");
});