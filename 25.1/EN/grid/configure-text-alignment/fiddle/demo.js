$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "500px",
        columns: [
            { headerText: "Product ID", key: "ProductID", dataType: "number", width: "15%", columnCssClass: "numericAlignment" },
            { headerText: "Product Name", key: "Name", dataType: "string", width: "40%" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "30%" },
            { headerText: "Reorder Point", key: "ReorderPoint", dataType: "number", width: "15%", columnCssClass: "numericAlignment" }
        ],
        dataSource: adventureWorks
    });
});