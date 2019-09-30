$(function () {
    createCustomConditionsFilteringGrid();
});

function createCustomConditionsFilteringGrid() {
    $("#gridCustomConditions").igGrid({
        autoGenerateColumns: false,
        columns: [ 
            { headerText: "Employee ID", key: "EmployeeID", dataType: "string", hidden: true },
            { headerText: "First Name", key: "FirstName", dataType: "string" },
            { headerText: "Last Name", key: "LastName", dataType: "string" },
            { headerText: "Register Date", key: "RegistererDate", dataType: "date" },
            { headerText: "Country", key: "Country", dataType: "string" },
            { headerText: "Age", key: "Age", dataType: "number" },
            { headerText: "Is Active", key: "IsActive", dataType: "bool" }
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
                            labelText: 'Over 21',
                            expressionText: 'Over 21',
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