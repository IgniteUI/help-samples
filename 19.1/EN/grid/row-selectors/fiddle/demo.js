$(function () {
    /*----------------- Instantiation -------------------------*/
    createDefaultSelectorsGrid();
    createCboxSelectorsGrid();
    createRowNumberingGrid();
});



function createDefaultSelectorsGrid() {
    $("#defaultRowSelectors").igGrid({
        width: "100%",
        autoGenerateColumns: false,
        dataSource: northwindEmployees,
        responseDataKey: "results",
        dataSourceType: "json",
        columns: [
            { headerText: "Employee ID", key: "ID", dataType: "number", width: "120px", hidden: true },
            { headerText: "Name", key: "Name", dataType: "string" },
            { headerText: "Title", key: "Title", dataType: "string"},
            { headerText: "Phone", key: "Phone", dataType: "string" },
            { headerText: "Country", key: "Country", dataType: "string" }
        ],
        features: [
            {
                name: 'Responsive',
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: 'Country',
                        classes: 'ui-hidden-phone'
                    }
                ]
            },
            {
                name: "RowSelectors",
                enableRowNumbering: false
            },
            {
                name: "Selection"
            }
        ]
    });
}

function createCboxSelectorsGrid() {
    $("#cbRowSelectors").igGrid({
        width: "100%",
        autoGenerateColumns: false,
        dataSource: northwindEmployees,
        responseDataKey: "results",
        dataSourceType: "json",
        columns: [
            { headerText: "Employee ID", key: "ID", dataType: "number", width: "120px", hidden: true },
            { headerText: "Name", key: "Name", dataType: "string"},
            { headerText: "Title", key: "Title", dataType: "string" },
            { headerText: "Phone", key: "Phone", dataType: "string" },
            { headerText: "Country", key: "Country", dataType: "string" }

        ],
        features: [
            {
                name: 'Responsive',
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: 'Country',
                        classes: 'ui-hidden-phone'
                    }
                ]
            },
            {
                name: "RowSelectors",
                enableCheckBoxes: true,
                enableRowNumbering: false
            },
            {
                name: "Selection"
            }
        ]
    });
}

function createRowNumberingGrid() {
    $("#rowNumbering").igGrid({
        width: "100%",
        autoGenerateColumns: false,
        dataSource: northwindEmployees,
        responseDataKey: "results",
        dataSourceType: "json",
        columns: [
            { headerText: "Employee ID", key: "ID", dataType: "number", width: "120px", hidden: true },
            { headerText: "Name", key: "Name", dataType: "string" },
            { headerText: "Title", key: "Title", dataType: "string" },
            { headerText: "Phone", key: "Phone", dataType: "string" },
            { headerText: "Country", key: "Country", dataType: "string" }

        ],
        features: [
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: 'Country',
                        classes: 'ui-hidden-phone'
                    }
                ]
            },
            {
                name: "RowSelectors",
                enableRowNumbering: true
            },
            {
                name: "Selection"
            }
        ]
    });
}