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
				{ headerText: "社員 ID", key: "ID", dataType: "number", hidden: true },
				{ headerText: "画像", key: "ImageUrl", dataType: "object", template: "<img width='100' height='90' src='${ImageUrl}' alt='${Name}' title='${Name}' />" },
				{ headerText: "名前", key: "Name", dataType: "string" },
				{ headerText: "役職", key: "Title", dataType: "string" },
				{ headerText: "電話", key: "Phone", dataType: "string" },
				{ headerText: "雇用日", key: "HireDate", dataType: "date" }
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