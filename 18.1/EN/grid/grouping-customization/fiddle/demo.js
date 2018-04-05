$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "400px",
        columns: [
            { headerText: "Product ID", key: "ProductID", dataType: "number", width: "20%" },
            { headerText: "Product Name", key: "Name", dataType: "string", width: "30%" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
            { headerText: "Make Flag", key: "MakeFlag", dataType: "bool", width: "25%" }
        ],
        dataSource: adventureWorks,
        features: [
            {
                name: 'GroupBy',
                columnSettings: [
                    {
                        columnKey: "Name",
                        isGroupBy: true,
                        compareFunc: groupByFirstLetter,
						groupLabelFormatter: function (val) {
							val = val || "";
							return val.substring(0, 1);
						}
                    }
                ]
            }
        ]
    });
});
function groupByFirstLetter(val1, val2) {
	val1 = val1 || "";
	val2 = val2 || "";
	val1 = val1.substring(0, 1);
	val2 = val2.substring(0, 1);
	return val1 > val2 ? 1 : val1 < val2 ? -1 : 0;
}