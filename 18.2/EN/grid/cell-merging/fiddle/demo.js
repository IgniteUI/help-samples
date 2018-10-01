$(function () {
    $("#grid").igGrid({
        width: "100%",
        autoGenerateColumns: false,
        dataSource: northwind,
        responseDataKey: "results",
        dataSourceType: "json",
        columns: [
           { key: "EmployeeID", headerText: "Employee ID", dataType: "number" },
           { key: "LastName", headerText: "First Name", dataType: "string" },
           { key: "FirstName", headerText: "Last Name", dataType: "string" },
           { key: "Title", headerText: "Title", dataType: "string" },
           { key: "Address", headerText: "Address", dataType: "string" },
           { key: "City", headerText: "City", dataType: "string" },
           { key: "Region", headerText: "Region", dataType: "string" },
           { key: "Country", headerText: "Country", dataType: "string" },
           { key: "PostalCode", headerText: "Postal Code", dataType: "string" }
        ],
        features: [
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: "EmployeeID",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "Address",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "LastName",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "Region",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "Country",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "PostalCode",
                        classes: "ui-visible-phone"
                    }
                ]
            },
            {
                name: "CellMerging",
                mergeOn: "always"
            },
            {
                name: "Sorting",
                type: "local",
                applySortedColumnCss: false
            }
        ]
    });
});