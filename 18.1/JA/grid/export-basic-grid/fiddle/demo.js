$(function () {
    $.ig.loader({
        scriptPath: "https://cdn-na.infragistics.com/igniteui/2018.1/latest/js/",
        cssPath: "https://cdn-na.infragistics.com/igniteui/2018.1/latest/css/",
        resources:'igGrid,' + 'igGridExcelExporter'
    });

$.ig.loader(function () {
    $(function () {
            var data = [
                { 'ProductID': 1, 'Name': 'Omnis ut illum nisi.', 'ProductNumber': '2973311236' },
                { 'ProductID': 2, 'Name': 'Quis quibusdam qui.', 'ProductNumber': '5907101619' },
                { 'ProductID': 3, 'Name': 'Sint laudantium et.', 'ProductNumber': '3057803521' },
                { 'ProductID': 17, 'Name': 'Tempore eos.', 'ProductNumber': '3576608248' },
                { 'ProductID': 18, 'Name': 'Maiores aut ducimus.', 'ProductNumber': '7079645227' },
                { 'ProductID': 19, 'Name': 'Vel inventore.', 'ProductNumber': '191484500' },
                { 'ProductID': 20, 'Name': 'Ut molestiae.', 'ProductNumber': '2994899561' },
                { 'ProductID': 31, 'Name': 'Nihil magnam aut ut.', 'ProductNumber': '5652753011' },
                { 'ProductID': 32, 'Name': 'Repellendus dolorum.', 'ProductNumber': '8807902556' },
                { 'ProductID': 43, 'Name': 'Odit ut quo minus.', 'ProductNumber': '1083007847' }
            ];

            $("#grid").igGrid({
                autoGenerateColumns: false,
                columns: [
                    { key: "ProductID", headerText: "製品 ID", width: "100px", dataType: "number" },
                    { key: "Name", headerText: "製品名", width: "250px", dataType: "string" },
                    { key: "ProductNumber", headerText: "製品番号", width: "200px", dataType: "number" }
                ],
                dataSource: data,
                primaryKey: "ProductID"
            });

            $("#exportButton").on("click", function () {
                $.ig.GridExcelExporter.exportGrid(
                    $('#grid'),
                    { 	
                        fileName: 'igGrid',
                        worksheetName: 'Sheet1',
                    }
                );
            });
        });
    });
});