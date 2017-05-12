$(function () {
    $( "#grid" ).igGrid( {
        autoGenerateColumns: false,
        autofitLastColumn: false,
        width: "100%",
        columns: [
            { headerText: "First Name", key: "FirstName", dataType: "string", width: "10%" },
            { headerText: "Last Name", key: "LastName", dataType: "string", width: "10%" },
            { headerText: "Title", key: "Title", dataType: "string", width: "17%" },
            { headerText: "Birth Date", key: "BirthDate", dataType: "date", width: "8%" },
            { headerText: "Notes", key: "Notes", dataType: "string", width: "55%", template: "<p class='tooltip-grid-notes'> ${Notes} </p>" }
        ],
        dataSource: northwind,
        responseDataKey: "results",
        features: [
            {
                name: "Tooltips",
                columnSettings: [
                   { columnKey: "FirstName", allowTooltips: false },
                   { columnKey: "LastName", allowTooltips: false }
                ],
                style: Modernizr.touch ? "popover" : "tooltip",
                visibility: "always"
            },
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: "LastName",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "Title",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "BirthDate",
                        classes: "ui-hidden-phone"
                    }
                ]
            }
        ]
    });
});