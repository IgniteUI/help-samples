$(function () {
    $( function ()
    {
        $("#grid").igGrid({
			dataSource: northwindEmployees,
			primaryKey: "ID",
			width: "100%",
			height: "600px",
			autoGenerateColumns: false,
			columns: [
				{ headerText: "Employee ID", key: "ID", dataType: "number", hidden: true },
				{ headerText: "Image", key: "ImageUrl", dataType: "object", template: "<img width='100' height='90' src='${ImageUrl}' alt='${Name}' title='${Name}' />" },
				{ headerText: "Name", key: "Name", dataType: "string" },
				{ headerText: "Title", key: "Title", dataType: "string" },
				{ headerText: "Phone", key: "Phone", dataType: "string" },
				{ headerText: "HireDate", key: "HireDate", dataType: "date" }
			],
			features: [
				{
					name: "Updating",
					enableAddRow: false,
					enableDeleteRow: false,
					editMode: "dialog",
					columnSettings: [
						{
						    columnKey: "ImageUrl",
							readOnly: true
						},
						{
							columnKey: "Name",
							readOnly: true
						}
					],
					rowEditDialogOptions: {
						width: "530px",
						height: "410px",
						dialogTemplateSelector: "#dialogTemplate",
						editorsTemplateSelector: "#editorsTemplate",
						showReadonlyEditors: false,
					}
				}
			]
		});
    });
});