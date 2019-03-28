$(function () {
    $("#grid").igGrid({
        width: "800px",
        dataSource: projects,
        dataSourceType: "json",
        primaryKey: "ActionID",
        autoGenerateColumns: false,
        columns: [
            { headerText: "Action ID ", key: "ActionID", dataType: "number", hidden: true},
            { headerText: "Project Name", key: "ProjectName", dataType: "object", width: "30%"},
            { headerText: "Type", key: "Type", dataType: "string", width: "15%"},
            { headerText: "Priority", key: "Priority", dataType: "string", width: "15%"},
            { headerText: "Status", key: "Status", dataType: "string", width: "15%"},
            { headerText: "Action", key: "ActionName", dataType: "string", width: "40%"},
            { headerText: "Created on", key: "Created", dataType: "date", width: "15%"},
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