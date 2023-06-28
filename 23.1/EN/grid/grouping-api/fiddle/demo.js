$(function () {
    function getGroupRows(data) {
        if (data === undefined) {
            return;
        }
        var groupRows;
        groupRows = $.grep(data, function (rec) {
            return rec.__gbRecord === true;
        });
        return groupRows;
    }
    $(function () {
        $('#columns').igCombo({
            noMatchFoundText: "There aren't any grouped columns",
            filteringType: "None",
            mode: "dropdown",
            dataSource: [
                { text: "None", key: "none" },
                { text: "Order ID", key: "OrderID" },
                { text: "Ship Name", key: "ShipName" },
                { text: "Ship City", key: "ShipCity" },
                { text: "Ship Country", key: "ShipCountry" },
                { text: "Customer City", key: "City" }
            ],
            textKey: "text",
            valueKey: "key",
            selectionChanged: function (evt, args) {
                console.log(args);
                var item = args.items[0], groupRows, data;
                $("#grid").igGridGroupBy("ungroupAll");
                if (item.data.key !== "none") {
                    $("#grid").igGridGroupBy("groupByColumn", item.data.key);
                    data = $("#grid").data("igGrid").dataSource.groupByData()
                    groupRows = getGroupRows(data);
                    $('#groupRows').igCombo("option", "dataSource", groupRows);
                    $('#groupRows').igCombo("value", groupRows[0].id);
                } else {
                    $('#groupRows').igCombo("option", "dataSource", []);
                }
            }
        });
        $('#groupRows').igCombo({
            noMatchFoundText: "There aren't any grouped columns",
            textKey: "val",
            valueKey: "id"
        });
        $("#expand").igButton({
            labelText: "Expand",
            click: function (evt, args) {
                var groupId = $('#groupRows').igCombo("value");
                if (groupId.length === 0) {
                    return;
                }
                $("#grid").igGridGroupBy("expand", groupId);
            }
        });
        $("#collapse").igButton({
            labelText: "Collapse",
            click: function (evt, args) {
                var groupId = $('#groupRows').igCombo("value");
                if (groupId.length === 0) {
                    return;
                }
                $("#grid").igGridGroupBy("collapse", groupId);
            }
        });
        $("#expandAll").igButton({
            labelText: "Expand All",
            click: function (evt, args) {
                var ds = $("#grid").data("igGrid").dataSource,
                    groupRows = getGroupRows(ds.groupByData());
                if (groupRows === undefined) {
                    return;
                }
                for (var i = 0; i < groupRows.length; i++) {
                    $("#grid").igGridGroupBy("expand", groupRows[i].id);
                }
            }
        });
        $("#collapseAll").igButton({
            labelText: "Collapse All",
            click: function (evt, args) {
                var ds = $("#grid").data("igGrid").dataSource,
                   groupRows = getGroupRows(ds.groupByData());
                if (groupRows === undefined) {
                    return;
                }
                for (var i = 0; i < groupRows.length; i++) {
                    $("#grid").igGridGroupBy("collapse", groupRows[i].id);
                }
            }
        });
        $("#grid").igGrid({
            autoGenerateColumns: false,
            width: "100%",
            height: "400px",
            columns: [
                { headerText: "Order ID", key: "OrderID", dataType: "number", width: "10%" },
                { headerText: "Ship Name", key: "ShipName", dataType: "string", width: "30%" },
                { headerText: "Ship City", key: "ShipCity", dataType: "string", width: "20%" },
                { headerText: "Ship Country", key: "ShipCountry", dataType: "string", width: "20%" },
                { headerText: "Customer City", key: "City", dataType: "string", width: "20%" }
            ],
            dataSource: northwindInvoices,
            features: [
                {
                    name: 'GroupBy',
                    groupByDialogContainment: "window",
                    initialExpand: false,
                    groupedColumnsChanged: function (evt, args) {
                        var ds = args.owner.grid.dataSource, groupRows = getGroupRows(ds.groupByData()),
                            len = args.groupedColumns.length, cols = args.groupedColumns;
                        if (len !== 0) {
                            $('#groupRows').igCombo("option", "dataSource", groupRows);
                            $('#columns').igCombo("value", cols[len - 1].key);
                            $('#groupRows').igCombo("value", groupRows[0].id);
                        } else {
                            $('#groupRows').igCombo("option", "dataSource", []);
                            $('#columns').igCombo("value", "none");
                        }
                    }
                }
            ]
        });
    });
});