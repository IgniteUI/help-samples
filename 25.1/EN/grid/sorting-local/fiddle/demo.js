$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        columns: [
            { headerText: "Employee ID", key: "EmployeeID", dataType: "number", width: "15%" },
            { headerText: "First Name", key: "FirstName", dataType: "string", width: "20%" },
            { headerText: "Last Name", key: "LastName", dataType: "string", width: "20%" },
            { headerText: "Birth Date", key: "BirthDate", dataType: "date", width: "15%" },
            { headerText: "City", key: "City", dataType: "string", width: "15%" },
            { headerText: "Postal Code", key: "PostalCode", dataType: "string", width: "15%" }
        ],
        dataSource: northwind,
        responseDataKey: "results",
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
                        columnKey: "PostalCode",
                        classes: "ui-hidden-phone"
                    }
                ]
            },
            {
                name: "Sorting",
                type: "local"
            }
        ]
    });
});