$(function () {
    $("#grid").igGrid({
        width: "800px",
        dataSource: projects,
        dataSourceType: "json",
        primaryKey: "ActionID",
        autoGenerateColumns: false,
        columns: [
            { headerText: "操作 ID ", key: "ActionID", dataType: "number", hidden: true},
            { headerText: "プロジェクト名", key: "ProjectName", dataType: "object", width: "30%"},
            { headerText: "タイプ", key: "Type", dataType: "string", width: "15%"},
            { headerText: "優先", key: "Priority", dataType: "string", width: "15%"},
            { headerText: "状態", key: "Status", dataType: "string", width: "15%"},
            { headerText: "操作", key: "ActionName", dataType: "string", width: "40%"},
            { headerText: "作成日付", key: "Created", dataType: "date", width: "15%"},
        ],
		autoCommit: true,
		enableHoverStyles : false,
        features: [
            {
                name: "CellMerging",
                mergeOn: "always",
				mergeType: "physical",
				mergeStrategy: function (prevRec, curRec, columnKey) {
					if ($.type(prevRec[ columnKey ]) === "string" &&
						$.type(curRec[ columnKey ]) === "string" &&
						 prevRec["ProjectName"] === curRec["ProjectName"]) {
						return prevRec[ columnKey ].toLowerCase() === curRec[ columnKey ].toLowerCase();
					} else if ( prevRec["ProjectName"] === curRec["ProjectName"]) {
						return prevRec[ columnKey ] === curRec[ columnKey ];
					}
					
					return false;
				}
            },
            {
                name: "Updating",
				editMode: "cell",
				enableAddRow: false
            }
        ]
    });
});