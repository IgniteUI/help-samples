$(function () {
    $("#grid").igGrid({
        primaryKey: "EmployeeID",
        width: '100%',
        columns: [
            { headerText: "従業員 ID", key: "EmployeeID", dataType: "number", width: "15%" },
            { headerText: "名前", key: "FirstName", dataType: "string", width: "25%" },
            { headerText: "名字", key: "LastName", dataType: "string", width: "25%"},
            { headerText: "役職", key: "Title", dataType: "string", width: "35%" }
        ],
        autofitLastColumn: false,
        autoGenerateColumns: false,
        dataSource: northwind,
        responseDataKey: "results",
        features: [
            {
                name: "Sorting",
                type: "local",
                mode: "multi",
                sortingDialogContainment: "window"
            },
            {
                name: "Filtering",
                type: "local",
                mode: "advanced",
                filterDialogContainment: "window"
            },
            {
                name: "Hiding"
            },
            {
                name: "ColumnMoving",
                columnMovingDialogContainment: "window"
            },
            {
                name: "Summaries"
            }
        ]
    });
});