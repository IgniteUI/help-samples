$(function () {
    // Used to show output in the API Viewer at runtime, 
    // defined in external script 'apiviewer.js'    
    var apiViewer = new $.ig.apiViewer();

    // Initialize buttons for create, destroy, open and close the igDialog
    $("#createDialog").igButton({ labelText: "Create Dialog" });
    $("#destroyDialog").igButton({ labelText: "Destroy Dialog", disabled: true });
    $("#openDialog").igButton({ labelText: "Open Dialog", disabled: true });
    $("#closeDialog").igButton({ labelText: "Close Dialog", disabled: true });
    $("#maximizeDialog").igButton({ labelText: "Maximize Dialog", disabled: true });
    $("#minimizeDialog").igButton({ labelText: "Minimize Dialog", disabled: true });
    $("#pinDialog").igButton({ labelText: "Pin Dialog", disabled: true });
    $("#unpinDialog").igButton({ labelText: "Unpin Dialog", disabled: true });
    /*----------------- Method & Option Examples -------------------------*/

    // process events of buttons
    $('#createDialog').on({
        click: function () {
            // Initialize the igDialog
            $("#dialog").igDialog({
                stateChanging: function (evt, ui) {
                    // Check the igDialog state  
                    if (ui.action === "close") {
                        $("#openDialog").igButton({ disabled: false });
                        $("#closeDialog").igButton({ disabled: true });
                    }

                    // Check the igDialog state
                    if (ui.action === "pin") {
                        $("#pinDialog").igButton({ disabled: true });
                        $("#unpinDialog").igButton({ disabled: false });
                    }

                    // Check the igDialog state
                    if (ui.action === "unpin") {
                        $("#pinDialog").igButton({ disabled: false });
                        $("#unpinDialog").igButton({ disabled: true });
                    }

                    // Check the igDialog state
                    if (ui.action === "minimize") {
                        $("#minimizeDialog").igButton({ disabled: true });
                        $("#openDialog").igButton({ disabled: true });
                        $("#closeDialog").igButton({ disabled: false });
                    }

                    // Check the igDialog state
                    if (ui.action === "maximize") {
                        $("#maximizeDialog").igButton({ disabled: true });
                        $("#openDialog").igButton({ disabled: true });
                        $("#closeDialog").igButton({ disabled: false });
                        $("#pinDialog").igButton({ disabled: false });
			            $("#unpinDialog").igButton({ disabled: true });
                    }

                    // Check the igDialog state
                    if (ui.action === "restore") {
                        $("#minimizeDialog").igButton({ disabled: false });
                        $("#maximizeDialog").igButton({ disabled: false });
                    }
                },
                closeButtonTitle: "Close Dialog Window",
                minimizeButtonTitle: "Minimize Dialog Window",
                maximizeButtonTitle: "Maximize Dialog Window",
                pinButtonTitle: "Pin Dialog Window",
                unpinButtonTitle: "Unpin Dialog Window",
                restoreButtonTitle: "Restore Dialog Window",
                showMinimizeButton: true,
                showMaximizeButton: true,
                showPinButton: true,
                height: 400,
                minHeight: 240,
                maxHeight: 600,
                width: 280,
                minWidth: 200,
                maxWidth: 600,
                headerText: "This is my header text.",
                showFooter: true,
                footerText: "This is my footer text.",
                openAnimation: "fade",
                closeAnimation: "fade"
            });

            // Disable the create button
            $("#createDialog").igButton({ disabled: true });

            // Enable buttons
            $("#destroyDialog").igButton({ disabled: false });
            $("#closeDialog").igButton({ disabled: false });
            $("#maximizeDialog").igButton({ disabled: false });
            $("#minimizeDialog").igButton({ disabled: false });
            $("#pinDialog").igButton({ disabled: false });
            $("#unpinDialog").igButton({ disabled: true });
            $("#position").attr("disabled", false);
        }
    });

    $('#destroyDialog').on({
        click: function () {
            // Destroy the igDialog
            $("#dialog").igDialog("destroy");

            // Enable the create button
            $("#createDialog").igButton({ disabled: false });

            // Disable buttons
            $("#destroyDialog").igButton({ disabled: true });
            $("#openDialog").igButton({ disabled: true });
            $("#closeDialog").igButton({ disabled: true });
            $("#maximizeDialog").igButton({ disabled: true });
            $("#minimizeDialog").igButton({ disabled: true });
            $("#pinDialog").igButton({ disabled: true });
            $("#unpinDialog").igButton({ disabled: true });
            $("#position").attr("disabled", true);
        }
    });

    $('#openDialog').on({
        click: function () {
            // Open the igDialog
            $("#dialog").igDialog("open");

            // Disable the open button
            $("#openDialog").igButton({ disabled: true });

            // Enable the close button
            $("#closeDialog").igButton({ disabled: false });
        }
    });

    $('#closeDialog').on({
        click: function () {
            // Close the igDialog
            $("#dialog").igDialog("close");

            // Enable the open button
            $("#openDialog").igButton({ disabled: false });

            // Disable the close button
            $("#closeDialog").igButton({ disabled: true });
        }
    });

    $('#minimizeDialog').on({
        click: function () {
            // Minimize the igDialog
            $("#dialog").igDialog("minimize");

            $("#minimizeDialog").igButton({ disabled: true });
        }
    });

    $('#maximizeDialog').on({
        click: function () {
            // Maximize the igDialog
            $("#dialog").igDialog("maximize");

            $("#maximizeDialog").igButton({ disabled: true });
        }
    });

    $('#pinDialog').on({
        click: function () {
            // Pin the igDialog
            $("#dialog").igDialog("pin");

            $("#pinDialog").igButton({ disabled: true });
            $("#unpinDialog").igButton({ disabled: false });
        }
    });

    $('#unpinDialog').on({
        click: function () {
            // Unpin the igDialog
            $("#dialog").igDialog("unpin");

            $("#pinDialog").igButton({ disabled: false });
            $("#unpinDialog").igButton({ disabled: true });
        }
    });

    // Helper function, which convert selected option from string into valid position for the igDialog
    function getPosition() {
        var pair, position = {}, val = $("#position").val().split(","), i = val.length;
        while (i-- > 0) {
            pair = val[i].split(":");
            position[pair[0]] = eval(pair[1]);
        }
        return position;
    }

    // process option to change position of dialog
    $("#position").change(function () {
       // Destroy the igDialog
       $("#dialog").igDialog("option", "position", getPosition());
    });

    /*----------------- Event Examples -------------------------*/

    $("#dialog").on("igdialogstatechanging", function (evt, ui) {
        var message = "igdialogstatechanging";
        apiViewer.log(message);
    });

    $("#dialog").on("igdialogstatechanged", function (evt, ui) {
        var message = "igdialogstatechanged";
        apiViewer.log(message);
    });

    $("#dialog").on("igdialoganimationended", function (evt, ui) {
        var message = "igdialoganimationended";
        apiViewer.log(message);
    });

    $("#dialog").on("igdialogfocus", function (evt, ui) {
        var message = "igdialogfocus";
        apiViewer.log(message);
    });

    $("#dialog").on("igdialogblur", function (evt, ui) {
        var message = "igdialogblur";
        apiViewer.log(message);
    });
});