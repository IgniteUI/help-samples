$(function () {
	var northWindCategoriesJSON = [
		{ "ID": 0, "Name": "食品" },
		{ "ID": 1, "Name": "飲料" },
		{ "ID": 2, "Name": "電子機器" }
	];
	var northwindProductsJSON = [
		{ "ID": 0, "Name": "パン", "Description": "全粒粉パン", "ReleaseDate": "\/Date(694224000000)\/", "DiscontinuedDate": null, "Rating": 4, "Price": "2.5", "Category": { "ID": 0, "Name": "食品" } },
		{ "ID": 1, "Name": "ミルク", "Description": "低脂肪乳", "ReleaseDate": "\/Date(812505600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "3.5", "Category": { "ID": 1, "Name": "飲料" } },
		{ "ID": 2, "Name": "ビント ソーダ", "Description": "アメリカン バラエティ - 6 つのフレーバー", "ReleaseDate": "\/Date(970358400000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "20.9", "Category": { "ID": 1, "Name": "飲料" } },
		{ "ID": 3, "Name": "ハビナ ソーダ", "Description": "元祖ライム ソーダ", "ReleaseDate": "\/Date(1128124800000)\/", "DiscontinuedDate": "\/Date(1159660800000)\/", "Rating": 3, "Price": "19.9", "Category": { "ID": 1, "Name": "飲料" } },
		{ "ID": 4, "Name": "フルーツ ソーダ", "Description": "マンゴ フレーバー 8.3 オンス缶 (24 パック)", "ReleaseDate": "\/Date(1041724800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.99", "Category": { "ID": 1, "Name": "飲料" } },
		{ "ID": 5, "Name": "クランベリー ジュース", "Description": "16 オンス ボトル (12 パック)", "ReleaseDate": "\/Date(1154649600000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "22.8", "Category": { "ID": 1, "Name": "飲料" }, },
		{ "ID": 6, "Name": "ピンク レモネード", "Description": "36 オンス缶 (3 パック)", "ReleaseDate": "\/Date(1162684800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "18.8", "Category": { "ID": 1, "Name": "飲料" }, },
		{ "ID": 7, "Name": "DVD プレーヤー", "Description": "1080P DVD プレーヤー", "ReleaseDate": "\/Date(1163548800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "35.88", "Category": { "ID": 2, "Name": "電子機器" } },
		{ "ID": 8, "Name": "LCD HDTV", "Description": "42 インチ 1080p LCD (ブルーレイ プレーヤー内臓)", "ReleaseDate": "\/Date(1210204800000)\/", "DiscontinuedDate": null, "Rating": 3, "Price": "1088.8", "Category": { "ID": 2, "Name": "電子機器" } }
	];

	$("#grid").igGrid({
		dataSource: northwindProductsJSON, //JSON Array with a complex Category object defined above
		primaryKey: "ID",
		autoCommit:true,
		width:"100%",
		autoGenerateColumns: false,
		columns: [
			{ headerText: "", key: "ID", dataType: "number", hidden: true },
			{ headerText: "製品名", key: "Name", dataType: "string" },
			{ headerText: "説明", key: "Description", dataType: "string" },
			{ headerText: "カテゴリ", key: "Category", dataType: "object", mapper: function (record) {
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