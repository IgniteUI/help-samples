$(function () {
    // Used to show output in the API Viewer at runtime, 
    // defined in external script 'apiviewer.js'    
    var apiViewer = new $.ig.apiViewer();

    /*----------------- Method & Option Examples -------------------------*/

    // process events of buttons
    $('#igButtonSplitterFirstPanelCollapse').on({
        click: function () {
            $("#splitter").igSplitter("collapseAt", 0);
        }
    });

    $('#igButtonSplitterSecondPanelCollapse').on({
        click: function () {
            $("#splitter").igSplitter("collapseAt", 1);
        }
    });

    $('#igButtonSplitterFirstPanelExpand').on({
        click: function () {
            $("#splitter").igSplitter("expandAt", 0);
        }
    });

    $('#igButtonSplitterSecondPanelExpand').on({
        click: function () {
            $("#splitter").igSplitter("expandAt", 1);
        }
    });

    $('#igButtonSplitBarButtons').on({
        click: function () {
            $("#splitter").igSplitter("splitBar").children("div").remove();
        }
    });

    $('#igButtonSplitterFirstPanel').on({
        click: function () {
            $("#splitter").igSplitter("firstPanel").text($("#firstPanelText").val());
        }
    });

    $('#igButtonSplitterSecondPanel').on({
        click: function () {
            $("#splitter").igSplitter("secondPanel").text($("#secondPanelText").val());
        }
    });

    $('#igButtonSplitterFirstPanelSize').on({
        click: function () {
            $("#splitter").igSplitter("setFirstPanelSize", $("#firstPanelSize").val());
        }
    });

    $('#igButtonSplitterSecondPanelSize').on({
        click: function () {
            $("#splitter").igSplitter("setSecondPanelSize", $("#secondPanelSize").val());
        }
    });

    /*----------------- Event Examples -------------------------*/

    $("#splitter").on("igsplitterresizestarted", function (evt, ui) {
        var message = "igsplitterresizestarted";
        apiViewer.log(message);
    });

    $("#splitter").on("igsplitterresizing", function (evt, ui) {
        var message = "igsplitterresizing";
        apiViewer.log(message);
    });

    $("#splitter").on("igsplitterresizeended", function (evt, ui) {
        var message = "igsplitterresizeended";
        apiViewer.log(message);
    });

    $("#splitter").on("igsplittercollapsed", function (evt, ui) {
        var message = "igsplittercollapsed panel: " + ui.index;
        apiViewer.log(message);
        if (ui.index === 0) {
            $("#igButtonSplitterFirstPanelExpand").attr("disabled", false);
            $("#igButtonSplitterFirstPanelCollapse").attr("disabled", true);
            $("#igButtonSplitterSecondPanelCollapse").attr("disabled", true);
        } else {
            $("#igButtonSplitterSecondPanelExpand").attr("disabled", false);
            $("#igButtonSplitterFirstPanelCollapse").attr("disabled", true);
            $("#igButtonSplitterSecondPanelCollapse").attr("disabled", true);
        }
    });

    $("#splitter").on("igsplitterexpanded", function (evt, ui) {
        var message = "igsplitterexpanded panel: " + ui.index;
        apiViewer.log(message);
        if (ui.index === 0) {
            $("#igButtonSplitterFirstPanelExpand").attr("disabled", true);
            $("#igButtonSplitterFirstPanelCollapse").attr("disabled", false);
            $("#igButtonSplitterSecondPanelCollapse").attr("disabled", false);
        } else {
            $("#igButtonSplitterSecondPanelExpand").attr("disabled", true);
            $("#igButtonSplitterFirstPanelCollapse").attr("disabled", false);
            $("#igButtonSplitterSecondPanelCollapse").attr("disabled", false);
        }
    });

    /*----------------- Instantiation -------------------------*/
    $("#splitter").igSplitter({ height: 300, panels: [{ collapsible: true }, { collapsible: true}] });

    $("#igButtonSplitterFirstPanelExpand").attr("disabled", true);
    $("#igButtonSplitterSecondPanelExpand").attr("disabled", true);
});