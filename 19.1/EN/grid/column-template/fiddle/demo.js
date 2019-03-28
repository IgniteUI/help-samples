$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "500px",
        columns: [
            { headerText: "Product ID", key: "ProductID", dataType: "number", width: "10%" },
            { headerText: "Product Name", key: "Name", dataType: "string", width: "30%" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "25%" },
            { headerText: "Make Flag", key: "MakeFlag", dataType: "bool", width: "15%" },
            { headerText: "", key: "Delete", dataType: "string", width: "20%", unbound: true, template: "<input type='button' onclick='deleteRow(${ProductID})' value='Delete row' class='delete-button'/>" }
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