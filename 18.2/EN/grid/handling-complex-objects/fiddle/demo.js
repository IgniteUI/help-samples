$(function () {
	var northWindCategoriesJSON = [
		{ "ID": 0, "Name": "Food" },
		{ "ID": 1, "Name": "Beverages" },
		{ "ID": 2, "Name": "Electronics" }
	];
	var northwindProductsJSON = [
		{ "ID": 0, "Name": "Bread", "Description": "Whole grain bread", "ReleaseDate": "\/Date(694224000000)\/", "DiscontinuedDate": null, "Rating": 4, "Price": "2.5", "Category": { "ID": 0, "Name": "Food" } },
		{ "ID": 1, "Name": "Milk", "Description": "Low fat milk", "ReleaseDate": "\/Date(812505600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "3.5", "Category": { "ID": 1, "Name": "Beverages" } },
		{ "ID": 2, "Name": "Vint Soda", "Description": "Americana Variety - Mix of 6 flavors", "ReleaseDate": "\/Date(970358400000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "20.9", "Category": { "ID": 1, "Name": "Beverages" } },
		{ "ID": 3, "Name": "Havina Cola", "Description": "The Original Key Lime Cola", "ReleaseDate": "\/Date(1128124800000)\/", "DiscontinuedDate": "\/Date(1159660800000)\/", "Rating": 3, "Price": "19.9", "Category": { "ID": 1, "Name": "Beverages" } },
		{ "ID": 4, "Name": "Fruit Punch", "Description": "Mango flavor, 8.3 Ounce Cans (Pack of 24)", "ReleaseDate": "\/Date(1041724800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.99", "Category": { "ID": 1, "Name": "Beverages" } },
		{ "ID": 5, "Name": "Cranberry Juice", "Description": "16-Ounce Plastic Bottles (Pack of 12)", "ReleaseDate": "\/Date(1154649600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.8", "Category": { "ID": 1, "Name": "Beverages" }, },
		{ "ID": 6, "Name": "Pink Lemonade", "Description": "36 Ounce Cans (Pack of 3)", "ReleaseDate": "\/Date(1162684800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "18.8", "Category": { "ID": 1, "Name": "Beverages" }, },
		{ "ID": 7, "Name": "DVD Player", "Description": "1080P Upconversion DVD Player", "ReleaseDate": "\/Date(1163548800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "35.88", "Category": { "ID": 2, "Name": "Electronics" } },
		{ "ID": 8, "Name": "LCD HDTV", "Description": "42 inch 1080p LCD with Built-in Blu-ray Disc Player", "ReleaseDate": "\/Date(1210204800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "1088.8", "Category": { "ID": 2, "Name": "Electronics" } }
	];

	$("#grid").igGrid({
		dataSource: northwindProductsJSON, //JSON Array with a complex Category object defined above
		primaryKey: "ID",
		autoCommit:true,
		width:"100%",
		autoGenerateColumns: false,
		columns: [
			{ headerText: "", key: "ID", dataType: "number", hidden: true },
			{ headerText: "Product Name", key: "Name", dataType: "string" },
			{ headerText: "Description", key: "Description", dataType: "string" },
			{ headerText: "Category", key: "Category", dataType: "object", mapper: function (record) {
					return record.Category.Name;
				}
			}
		],
		features: [
		{
			name: "Filtering"
		},
		{
			name: "Sorting"
		},
		{
			name: "Updating",
			editMode: "cell",
			columnSettings: [
				{
					columnKey: "Category",
					editorType: "combo",
					editorOptions: {
						dataSource: northWindCategoriesJSON,
						textKey: "Name",
						valueKey: "ID",
						mode: "dropdown"
					}
				}
			]
		}
		]
	});
});