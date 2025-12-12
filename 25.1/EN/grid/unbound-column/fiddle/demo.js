$(function () {

    var _isDataBound = false;

    /*----------------- Event Examples -------------------------*/

    $("#grid10").on("iggridupdatingdatadirty", function (event, ui) {
        $("#grid10").igGrid("saveChanges");
        return false;
    });            

    $("#grid10").on("iggriddatabound", function (event, ui) {

        if (_isDataBound === false) {
            _isDataBound = true;
        } else {
            return;
        }

        var i, grid = ui.owner,
               ds = grid.dataSource,
               data = ds.data(),
               dataLength = data.length;

        for (i = 0; i < dataLength; i++) {
            if (data[i]["UnitPrice"] * data[i]["UnitsInStock"] < 1000) {
                data[i]["IsPromotion"] = true;
            }
            else {
                data[i]["IsPromotion"] = false;
            }
        }
    });

    $("#grid10").on("iggridupdatingeditrowended", function (event, ui) {
        var unitPrice = ui.values["UnitPrice"];
        var unitsInStock = ui.values["UnitsInStock"];
        var totalValue = (unitPrice * unitsInStock) || ui.values["Total"];
        $("#grid10").igGridUpdating("setCellValue", ui.rowID, "Total", totalValue);

        if (totalValue < 1000) {
            $("#grid10").igGridUpdating("setCellValue", ui.rowID, "IsPromotion", true);
        }
        else {
            $("#grid10").igGridUpdating("setCellValue", ui.rowID, "IsPromotion", false);
        }
    });

    /*----------------- Instantiation -------------------------*/

    $("#grid10").igGrid({
        primaryKey: "ProductID",
        width: "100%",
        autoGenerateColumns: false,
        autoCommit: true,
        dataSourceType: "json",
        responseDataKey: "results",
        columns: [
            { headerText: "Product ID", key: "ProductID", dataType: "number" },
            { headerText: "Product Name", key: "ProductName", dataType: "string" },
            { headerText: "Units in Stock", key: "UnitsInStock", dataType: "number" },
            { headerText: "Unit Price", key: "UnitPrice", dataType: "number", format: "currency" },
            {
                headerText: "Promotion Exp Date", key: "PromotionExpDate", dataType: "date", unbound: true, format: "date",
                unboundValues: [new Date("4/24/2012"), new Date("8/24/2012"), new Date("6/24/2012"), new Date("7/24/2012"), new Date("9/24/2012"), new Date("10/24/2012"), new Date("11/24/2012")]
            },
            { headerText: "Is Promotion", key: "IsPromotion", dataType: "bool", unbound: true, format: "checkbox" },
            {
                headerText: "Total Price", key: "Total", dataType: "number", unbound: true, format: "currency",
                formula: function CalculateTotal(data, grid) { return data["UnitPrice"] * data["UnitsInStock"]; }
            }
        ],
        features:
        [
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: "ProductID",
                        classes: "ui-hidden-tablet"
                    }
                ]
            },
            {
                name: "Paging",
                type: "local",
                pageSize: 5
            },
            {
                name: "Updating",
                editMode: "row",
                enableAddRow: false,
                enableDeleteRow: true,
                columnSettings: [
					{
						columnKey: "ProductID",
						readOnly: true
					},
                    {
                        columnKey: "Total",
                        editorType: "numeric",
                        readOnly: true
                    },
                    {
                        columnKey: "IsPromotion",
                        editorType: "bool",
                        readOnly: true
                    },
					{
						columnKey: "UnitsInStock",
						required: true
					},
					{
						columnKey: "UnitPrice",
						required: true
					}
                ]
            }
        ],
        dataSource: northwindProducts
    });
});