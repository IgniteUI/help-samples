$(function () {
    $( "#grid" ).igGrid( {
        autoGenerateColumns: false,
        autofitLastColumn: false,
		renderCheckboxes: true,
        width: "100%",
        columns: [
            { headerText: "$$ (AdventureWorks_Products_Name"), key: "Name", dataType: "string", width: "20%" },
			{ headerText: "$$ (AdventureWorks_Products_ProductNumber"), key: "ProductNumber", dataType: "string", width: "20%" },
			{ headerText: "$$ (AdventureWorks_Products_MakeFlag)", key: "MakeFlag", dataType: "bool", width: "10%" },
			{ headerText: "$$ (AdventureWorks_Products_ReorderPoint)", key: "ReorderPoint", dataType: "number", width: "10%" },
			{ headerText: "$$ (AdventureWorks_Products_SellStartDate)", key: "SellStartDate", dataType: "date", width: "15%" }
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