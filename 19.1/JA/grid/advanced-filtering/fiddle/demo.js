$(function () {
    createAdvancedFilteringGrid();
});

function createAdvancedFilteringGrid() {
    $("#gridAdvancedFiltering").igGrid({
        autoGenerateColumns: false,
        columns: [
            { headerText: "従業員 ID", key: "EmployeeID", dataType: "string", hidden: true },
            { headerText: "名前", key: "FirstName", dataType: "string" },
            { headerText: "名字", key: "LastName", dataType: "string" },
            { headerText: "登録日付", key: "RegistererDate", dataType: "date" },
            { headerText: "国", key: "Country", dataType: "string" },
            { headerText: "年齢", key: "Age", dataType: "number" },
            { headerText: "アクティブ", key: "IsActive", dataType: "bool" }
        ],
        dataSource: employees,
        renderCheckboxes: true,
        responseDataKey: "results",
        features: [
            {
                name: "Filtering",
                type: "local",
                mode: "advanced",
                filterDialogContainment: "window"
            },
            {
                name: "Paging",
                type: "local",
                pageSize: 10
            }
        ]
    });
}