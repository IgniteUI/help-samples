$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        columns: [
            { headerText: "製品 ID", key: "ProductID", dataType: "number", width: "15%" },
            { headerText: "製品名", key: "Name", dataType: "string", width: "40%" },
            { headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "30%" },
            { headerText: "メーカー フラグ", key: "MakeFlag", dataType: "bool", width: "15%" }
        ],
        dataSource: adventureWorks,
        features: [
            {
                name: 'Paging',
                type: "local",
                pageSize: 10
            }
        ]
    });
});