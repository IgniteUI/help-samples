$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "500px",
        columns: [
            { headerText: "Product Name", key: "Name", dataType: "string", width: "20%" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
            { headerText: "Sell Start Date", key: "SellStartDate", dataType: "date", width: "20%", format: "ddd, MMM-d-yy HH:mm" },
            { headerText: "Modified Date", key: "ModifiedDate", dataType: "date", width: "20%", format: "dateTime" },
            { headerText: "List Price", key: "ListPrice", dataType: "number", width: "15%", format: "currency" }
        ],
        dataSource: adventureWorks
    });
});