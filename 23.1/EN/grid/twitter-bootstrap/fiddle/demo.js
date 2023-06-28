$(function () {
    $("#grid").igGrid({
        columns: [
            { headerText: "Customer ID", key: "ID", dataType: "string", width:"10%" },
            { headerText: "Company Name", key: "CompanyName", dataType: "string", width: "10%" },
            { headerText: "Contact Name", key: "ContactName", dataType: "string", width: "10%" },
            { headerText: "Contact Title", key: "ContactTitle", dataType: "string", width: "20%" },
            { headerText: "Address", key: "Address", dataType: "string", width: "20%" },
            { headerText: "City", key: "City", dataType: "string", width: "10%" },
            { headerText: "Country", key: "Country", dataType: "string", width: "15%" }
        ],
        autoGenerateColumns: false,
        dataSource: nwCustomersWithOrders,
        width: "100%",
        height: "400px",
        autofitLastColumn: false,
        features: [
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: "ID",
                        classes: "hidden-md-down hidden-sm-down"
                    },
                    {
                        columnKey: "ContactName",
                        classes: "hidden-sm-down"
                    },
                    {
                        columnKey: "ContactTitle",
                        classes: "hidden-md-down hidden-sm-down"
                    },
                    {
                        columnKey: "Address",
                        classes: "hidden-sm-down"
                    },
                    {
                        columnKey: "City",
                        classes: "hidden-sm-down"
                    },
                    {
                        columnKey: "Country",
                        classes: "hidden-md-down hidden-sm-down"
                    }
                ]
            }
        ]
    });
});