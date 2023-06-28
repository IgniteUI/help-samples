$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "500px",
        columns: [
            { headerText: "製品名", key: "Name", dataType: "string", width: "40%" },
            { headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "20%" },
            { headerText: "価格", key: "ListPrice", dataType: "number", width: "20%" },
            { headerText: "標準の原価", key: "StandardCost", dataType: "number", width: "20%" },
            { headerText: "時間", key: "ModifiedDate", dataType: "time", width: "20%" },
        ],
        dataSource: adventureWorks,
        features: [
            {
                name: "Summaries"
            }
        ]
    });
});