$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "500px",
        columns: [
            { headerText: "製品 ID", key: "ProductID", dataType: "number", width: "10%" },
            { headerText: "製品名", key: "Name", dataType: "string", width: "30%" },
            { headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "25%" },
            { headerText: "メーカー フラグ", key: "MakeFlag", dataType: "bool", width: "15%" },
            { headerText: "", key: "Delete", dataType: "string", width: "20%", unbound: true, template: "<input type='button' onclick='deleteRow(${ProductID})' value='行の削除' class='delete-button'/>" }
        ],
        primaryKey: "ProductID",
        dataSource: adventureWorks
    });
});

function deleteRow(rowId) {
    var grid = $("#grid").data("igGrid");
    grid.dataSource.deleteRow(rowId);
    grid.commit();
}