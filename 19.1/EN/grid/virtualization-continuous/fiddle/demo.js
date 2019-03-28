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
           { headerText: "Product Name", key: "ProductName", dataType: "string", width: "15%" },
           { headerText: "Ship Name", key: "ShipName", dataType: "string", width: "20%" },
           { headerText: "Order Date", key: "OrderDate", dataType: "date", width: "10%" },
           { headerText: "Total Price", key: "ExtendedPrice", dataType: "number", format: "currency", width: "10%" },
           { headerText: "Ship Address", key: "ShipAddress", dataType: "string", width: "15%" },
           { headerText: "Ship City", key: "ShipCity", dataType: "string", width: "10%" },
           { headerText: "Ship Country", key: "ShipCountry", dataType: "string", width: "10%" },
           { headerText: "Postal Code", key: "ShipPostalCode", dataType: "string", width: "10%" }
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