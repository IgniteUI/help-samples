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
            noMatchFoundText: "グループ化された列がありません",
            filteringType: "None",
            mode: "dropdown",
            dataSource: [
                { text: "なし", key: "none" },
                { text: "注文 ID", key: "OrderID" },
                { text: "出荷名", key: "ShipName" },
                { text: "配送先市町村", key: "ShipCity" },
                { text: "配送先の国", key: "ShipCountry" },
                { text: "顧客住所", key: "City" }
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
            noMatchFoundText: "グループ化された列がありません",
            textKey: "val",
            valueKey: "id"
        });
        $("#expand").igButton({
            labelText: "展開",
            click: function (evt, args) {
                var groupId = $('#groupRows').igCombo("value");
                if (groupId.length === 0) {
                    return;
                }
                $("#grid").igGridGroupBy("expand", groupId);
            }
        });
        $("#collapse").igButton({
            labelText: "縮小",
            click: function (evt, args) {
                var groupId = $('#groupRows').igCombo("value");
                if (groupId.length === 0) {
                    return;
                }
                $("#grid").igGridGroupBy("collapse", groupId);
            }
        });
        $("#expandAll").igButton({
            labelText: "すべて展開",
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
            labelText: "すべて縮小",
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
                { headerText: "注文 ID", key: "OrderID", dataType: "number", width: "10%" },
                { headerText: "出荷名", key: "ShipName", dataType: "string", width: "30%" },
                { headerText: "配送先市町村", key: "ShipCity", dataType: "string", width: "20%" },
                { headerText: "配送先の国", key: "ShipCountry", dataType: "string", width: "20%" },
                { headerText: "顧客住所", key: "City", dataType: "string", width: "20%" }
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