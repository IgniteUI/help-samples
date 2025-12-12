$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: true,
        defaultColumnWidth: "150px",
        width: "100%",
        dataSource: northwindProducts,
        responseDataKey: "results",
        features: [
            {
                name: "Paging",
                type: "local",
                pageSize: 5
            },
            {
                name: "Sorting",
                type: "local"
            },
            {
                name: "Filtering",
                type: "local"
            }
        ]
    });
});