$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "400px",
        caption: "固定ヘッダーが無効です。各列で幅が定義されます。",
        showHeaders: true,
        fixedHeaders: false,
        columns: [
            { headerText: "製品 ID", key: "ProductID", dataType: "number", width: "15%" },
            { headerText: "製品名", key: "Name", dataType: "string", width: "40%" },
            { headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "30%" },
            { headerText: "再注文", key: "ReorderPoint", dataType: "number", width: "15%" }
        ],
        dataSource: adventureWorks
    });
    $("#grid1").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "400px",
        caption: "固定ヘッダーが有効です。デフォルトの列幅が構成されます。",
        columns: [
            { headerText: "製品 ID", key: "ProductID", dataType: "number" },
            { headerText: "製品名", key: "Name", dataType: "string" },
            { headerText: "製品番号", key: "ProductNumber", dataType: "string" },
            { headerText: "再注文", key: "ReorderPoint", dataType: "number" }
        ],
        defaultColumnWidth: "200px",
        dataSource: adventureWorks
    });
});