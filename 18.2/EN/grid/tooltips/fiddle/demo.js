$(function () {
    $( "#grid" ).igGrid( {
        autoGenerateColumns: false,
        autofitLastColumn: false,
		renderCheckboxes: true,
        width: "100%",
        columns: [
            { headerText: "Product Name", key: "Name", dataType: "string", width: "20%" },
			{ headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
			{ headerText: "Make Flag", key: "MakeFlag", dataType: "bool", width: "10%" },
			{ headerText: "Reorder Point", key: "ReorderPoint", dataType: "number", width: "10%" },
			{ headerText: "Sell Start Date", key: "SellStartDate", dataType: "date", width: "15%" }
        ],
        dataSource: adventureWorks.slice(0, 10),
        features: [
            {
                name: "Tooltips",
                columnSettings: [
                   { columnKey: "Name", allowTooltips: false },
                   { columnKey: "MakeFlag", allowTooltips: false }
                ],
                style: Modernizr.touch ? "popover" : "tooltip",
                visibility: "always"
            },
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: "MakeFlag",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "ReorderPoint",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "SellStartDate",
                        classes: "ui-hidden-phone"
                    }
                ]
            }
        ]
    });
});