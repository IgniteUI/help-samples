$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        columns: [
            { headerText: "社員 ID", key: "EmployeeID", dataType: "number", width: "15%" },
            { headerText: "名前", key: "FirstName", dataType: "string", width: "20%" },
            { headerText: "名字", key: "LastName", dataType: "string", width: "20%" },
            { headerText: "生年月日", key: "BirthDate", dataType: "date", width: "15%" },
            { headerText: "市", key: "City", dataType: "string", width: "15%" },
            { headerText: "郵便番号", key: "PostalCode", dataType: "string", width: "15%" }
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