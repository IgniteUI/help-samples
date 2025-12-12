$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        renderCheckboxes: true,
        width: "100%",
        height: "500px",
        columns: [
            { headerText: "Product ID", key: "ProductID", dataType: "number", width: "15%" },
            { headerText: "Product Name", key: "Name", dataType: "string", width: "40%" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "30%" },
            { headerText: "Make Flag", key: "MakeFlag", dataType: "bool", width: "15%" }
        ],
        dataSource: adventureWorks
    });
});