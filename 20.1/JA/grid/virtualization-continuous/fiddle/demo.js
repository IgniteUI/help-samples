$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        autofitLastColumn : false,
        renderCheckboxes: true,
        width: "100%",
        height: "400px",
        rowVirtualization : true,
        virtualizationMode: "continuous",
        columns: [
           { headerText: "製品名", key: "ProductName", dataType: "string", width: "15%" },
           { headerText: "出荷名", key: "ShipName", dataType: "string", width: "20%" },
           { headerText: "注文日", key: "OrderDate", dataType: "date", width: "10%" },
           { headerText: "総額", key: "ExtendedPrice", dataType: "number", format: "currency", width: "10%" },
           { headerText: "配送先住所", key: "ShipAddress", dataType: "string", width: "15%" },
           { headerText: "配送先市町村", key: "ShipCity", dataType: "string", width: "10%" },
           { headerText: "配送先の国", key: "ShipCountry", dataType: "string", width: "10%" },
           { headerText: "郵便番号", key: "ShipPostalCode", dataType: "string", width: "10%" }
        ],
        dataSource: northwindInvoices,
        features:
        [
            {
                name: "Selection"
            },
            {
                name: "RowSelectors",
                enableRowNumbering: true
            },
            {
                name: "GroupBy"
            },
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: "OrderID",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "OrderDate",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "ExtendedPrice",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "ShipAddress",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "ShipCity",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "ShipCountry",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "ShipPostalCode",
                        classes: "ui-hidden-phone"
                    }
                ]
            }
        ]
    });
});