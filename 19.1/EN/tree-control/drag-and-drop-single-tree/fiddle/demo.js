$(function () {            

    var deletedNode,
		helperText;

    // Initialize the igDialog
    $("#modalDialog").igDialog({
        imageClass: "ui-icon ui-icon-alert",
        state: "closed",
        modal: true,
        draggable: false,
        resizable: false
    });

    // Initialize buttons for the Modal igDialog with igButton
    $("#yesModalDialog").igButton({ labelText: "Yes", width: 80 });
    $("#noModalDialog").igButton({ labelText: "No", width: 80 });

    $("#yesModalDialog").on("click", function (e) {
        if (helperText) {
            var node = $("#tree").igTree("findNodesByText", helperText);
            if (node.length > 0) {
                $("#tree").igTree("removeAt", node[0].path);
                $("#tree").igTree("addNode", node[0].data, deletedNode[0].element);
                helperText = "";
            }
        }
        // Close the Modal igDialog
        $("#modalDialog").igDialog("close");
    });

    $("#noModalDialog").on("click", function (e) {
        // Close the Modal igDialog
        $("#modalDialog").igDialog("close");
    });

    // Initialize the igTree
    $("#tree").igTree({
        checkboxMode: "triState",
        singleBranchExpand: true,
        dataSource: files,
        dataSourceType: "json",
        initialExpandDepth: 0,
        pathSeparator: ".",
        bindings: {
            textKey: "Text",
            valueKey: "Value",
            imageUrlKey: "ImageUrl",
            childDataProperty: "Folder"
        },
        // Enable Drag-and-drop feature
        dragAndDrop: true,
        dragAndDropSettings: {
            dragAndDropMode: "move",
            customDropValidation: function (element) {
                // Validates the drop target
                var droppableNode = $(this),
					draggableNode = $(element),
                    listContainer = droppableNode.closest("ul");

                if (draggableNode.attr("data-path") == "0") {
                    return false;
                }

                deletedNode = $("#tree").igTree("findNodesByText", "Deleted");
                if (deletedNode.length > 0) {
                    var nodePathArray = draggableNode.attr("data-path").split(".");
                    var deletedNodePathArray = deletedNode[0].path.split(".");
                    if (nodePathArray[0] == deletedNodePathArray[0] &&
						nodePathArray[1] == deletedNodePathArray[1]) {
                        return false;
                    }
                }

                if (droppableNode.is('a') && droppableNode.closest('li[data-role=node]').attr('data-value') === 'File') {
                    return false;
                }
                
                if (!droppableNode.is('a') && listContainer.length && listContainer.attr("data-depth") === "0") {
                    return false;
                }

                return true;
            }
        }
    });

    $("#trash").droppable({
        tolerance: "pointer",
        activeClass: "ui-state-highlight",
        accept: function (element) {
            var path = $(element).attr("data-path");

            if (path == "0") {
                return false;
            }

            deletedNode = $("#tree").igTree("findNodesByText", "Deleted");
            if (deletedNode.length > 0) {
                var nodePathArray = path.split(".");
                var DeletedNodePathArray = deletedNode[0].path.split(".");
                if (nodePathArray[0] == DeletedNodePathArray[0] &&
                    nodePathArray[1] == DeletedNodePathArray[1]) {
                    return false;
                }
            }

            return true;
        },
        over: function (event, ui) {
            markup = $(ui.helper.html());
            markup.find("span").removeClass("ui-icon-cancel").addClass("ui-icon-trash").siblings("strong");
            ui.helper.
				removeClass("ui-widget ui-igtree-dropindicator ui-state-error ui-corner-all").
				addClass("ui-widget ui-igtree-dropindicator ui-state-highlight ui-corner-all").
				html(markup);
        },
        out: function (event, ui) {
            markup = $(ui.helper.html());
            markup.find("span").removeClass("ui-icon-trash").addClass("ui-icon-cancel").siblings("strong");

            ui.helper.
				removeClass("ui-widget ui-igtree-dropindicator ui-state-highlight ui-corner-all").
				addClass("ui-widget ui-igtree-dropindicator ui-state-error ui-corner-all").
				html(markup);
        },
        drop: function (event, ui) {
            helperText = ui.helper.text();
            $("#modalDialog").igDialog("option", "headerText", "Permanently delete - " + helperText);
            $("#modalDialog").igDialog("open");
        }
    });

});