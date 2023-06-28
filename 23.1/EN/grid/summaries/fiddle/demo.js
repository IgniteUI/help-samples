$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "500px",
        columns: [
            { headerText: "Product Name", key: "Name", dataType: "string", width: "40%" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
            { headerText: "List Price", key: "ListPrice", dataType: "number", width: "20%" },
            { headerText: "Standard Cost", key: "StandardCost", dataType: "number", width: "20%" },
            { headerText: "Time", key: "ModifiedDate", dataType: "time", width: "20%" },
        ],
        dataSource: adventureWorks,
        features: [
            {
                name: "Summaries"
            }
        ]
    });
});