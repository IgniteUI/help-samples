$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "400px",
        caption: "<span> <img src=\"//www.infragistics.com/media/441501/horz_logo.png\" alt=\"Infragistics\"></span>",
        showHeaders: true,
        fixedHeaders: false,
        columns: [
            { headerText: "Product ID", key: "ProductID", dataType: "number", width: "15%" },
            { headerText: "Product Name", key: "Name", dataType: "string", width: "40%" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "30%" },
            { headerText: "Reorder Point", key: "ReorderPoint", dataType: "number", width: "15%" }
        ],
        dataSource: adventureWorks
    });
    $("#grid1").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "400px",
        caption: "Enabled fixed headers. Default column width is configured.",
        columns: [
            { headerText: "Product ID", key: "ProductID", dataType: "number" },
            { headerText: "Product Name", key: "Name", dataType: "string" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string" },
            { headerText: "Reorder Point", key: "ReorderPoint", dataType: "number" }
        ],
        defaultColumnWidth: "200px",
        dataSource: adventureWorks
    });
});