$(function () {
    createCustomConditionsFilteringGrid();
});

function createCustomConditionsFilteringGrid() {
    $("#gridCustomConditions").igGrid({
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
                mode: "simple",
                filterDialogContainment: "window",
                columnSettings: [
                {
                    columnKey: "Country",
                    customConditions: {
                       USA: {
                            key: 'USA',
                            labelText: 'USA',
                            expressionText: "USA",
                            filterFunc: filterCountryUSA
                       },
                       Canada:{
                             key: 'Canada',
                             labelText: 'Canada',
                             expressionText: "Canada",
                             filterFunc: filterCountryCanada
                       },
                    }
                },
                {
                    columnKey: "Age",
                    customConditions: {
                        Over21: {
                            labelText: '21 歳以上',
                            expressionText: '21 歳以上',
                            requireExpr: false,
                            filterFunc: filterAge
                        }
                    },
                    defaultExpressions: [
                        { cond: "Over21" }
                    ]
                }
            ]
            },
            {
                name: "Paging",
                type: "local",
                pageSize: 10
            }
        ]
    });
}

function filterCountryUSA(value, expression, dataType, ignoreCase, preciseDateFormat) {
    return value === "USA";
}
function filterCountryCanada(value, expression, dataType, ignoreCase, preciseDateFormat) {
    return value === "Canada";
}
function filterAge(value, expression, dataType, ignoreCase, preciseDateFormat) {
    return value > 21;
}