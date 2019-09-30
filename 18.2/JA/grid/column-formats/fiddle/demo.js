$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "500px",
        columns: [
            { headerText: "製品名", key: "Name", dataType: "string", width: "20%" },
            { headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "20%" },
            { headerText: "販売の開始日付", key: "SellStartDate", dataType: "date", width: "20%", format: "yyyy年MM月dd日(ddd) HH時mm分" },
            { headerText: "変更日付", key: "ModifiedDate", dataType: "date", width: "20%", format: "dateTime" },
            { headerText: "価格", key: "ListPrice", dataType: "number", width: "15%", format: "currency" }
        ],
        dataSource: adventureWorks
    });
});