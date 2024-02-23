$(function () {
    $.ig.loader({
        scriptPath: "https://cdn-na.infragistics.com/igniteui/2023.2/latest/js/",
        cssPath: "https://cdn-na.infragistics.com/igniteui/2023.2/latest/css/",
        resources: 'igGrid,' +
            'igGrid.Hiding,' +
            'igGrid.Filtering,' +
            'igGrid.Sorting,' +
            'igGrid.Paging,' +
            'igGrid.Summaries,' +
            'igGridExcelExporter'
    });

    $.ig.loader(function () {
        $(function () {
            var data = [
                    { 'ProductID': 1, 'Name': 'Omnis ut illum nisi.', 'ProductNumber': 2973311236, "InStock": true, "Quantity": 56 },
                    { 'ProductID': 2, 'Name': 'Quis quibusdam qui.', 'ProductNumber': 5907101619, "InStock": false, "Quantity": 0 },
                    { 'ProductID': 3, 'Name': 'Sint laudantium et.', 'ProductNumber': 3057803521, "InStock": true, "Quantity": 26 },
                    { 'ProductID': 17, 'Name': 'Tempore eos.', 'ProductNumber': 3576608248, "InStock": true, "Quantity": 8 },
                    { 'ProductID': 18, 'Name': 'Maiores aut ducimus.', 'ProductNumber': 7079645227, "InStock": true, "Quantity": 62 },
                    { 'ProductID': 19, 'Name': 'Vel inventore.', 'ProductNumber': 191484500, "InStock": true, "Quantity": 18 },
                    { 'ProductID': 20, 'Name': 'Ut molestiae.', 'ProductNumber': 2994899561, "InStock": false, "Quantity": 0 },
                    { 'ProductID': 31, 'Name': 'Nihil magnam aut ut.', 'ProductNumber': 5652753011, "InStock": true, "Quantity": 41 },
                    { 'ProductID': 32, 'Name': 'Repellendus dolorum.', 'ProductNumber': 8807902556, "InStock": true, "Quantity": 10 },
                    { 'ProductID': 43, 'Name': 'Odit ut quo minus.', 'ProductNumber': 1083007847, "InStock": false, "Quantity": 0 },
                    { 'ProductID': 1, 'Name': 'Omnis ut illum nisi.', 'ProductNumber': 2973311236, "InStock": true, "Quantity": 56 },
                    { 'ProductID': 2, 'Name': 'Quis quibusdam qui.', 'ProductNumber': 5907101619, "InStock": false, "Quantity": 0 },
                    { 'ProductID': 3, 'Name': 'Sint laudantium et.', 'ProductNumber': 3057803521, "InStock": true, "Quantity": 26 },
                    { 'ProductID': 17, 'Name': 'Tempore eos.', 'ProductNumber': 3576608248, "InStock": true, "Quantity": 8 },
                    { 'ProductID': 18, 'Name': 'Maiores aut ducimus.', 'ProductNumber': 7079645227, "InStock": true, "Quantity": 62 },
                    { 'ProductID': 19, 'Name': 'Vel inventore.', 'ProductNumber': 191484500, "InStock": true, "Quantity": 18 },
                    { 'ProductID': 20, 'Name': 'Ut molestiae.', 'ProductNumber': 2994899561, "InStock": false, "Quantity": 0 },
                    { 'ProductID': 31, 'Name': 'Nihil magnam aut ut.', 'ProductNumber': 5652753011, "InStock": true, "Quantity": 41 },
                    { 'ProductID': 32, 'Name': 'Repellendus dolorum.', 'ProductNumber': 8807902556, "InStock": true, "Quantity": 10 },
                    { 'ProductID': 43, 'Name': 'Odit ut quo minus.', 'ProductNumber': 1083007847, "InStock": false, "Quantity": 0 }
            ];

            $("#grid").igGrid({
                autoGenerateColumns: false,
                width: "100%",
                height: "350px",
                columns: [
                    { headerText: "製品 ID", key: "ProductID", dataType: "number", width: "100px" },
                    { headerText: "製品名", key: "Name", dataType: "string", width: "250px" },
                    { headerText: "製品番号", key: "ProductNumber", dataType: "number", width: "200px" },
                    { headerText: "在庫", key: "InStock", dataType: "bool", width: "150px" },
                    { headerText: "数量", key: "Quantity", dataType: "number", width: "150px" }
                ],
                dataSource: data
            });

            var exportingIndicator = $('<div>');
            $('#exportButton').on('click', function () {
                var gridExcelExporter = new $.ig.GridExcelExporter();
                var $grid = $('#grid');
                gridExcelExporter.exportGrid($grid, {
                    gridStyling: "applied",
                }, {
                    exportStarting: function (e, args) {
                        showExportingIndicator(args.grid, exportingIndicator);
                    },
                    success: function () {
                        hideExportingIndicator(exportingIndicator);
                    },
                });
            });
        });

        function showExportingIndicator(grid, exportingIndicator) {
            var $gridContainer = $('#' + grid.attr('id') + '_container');

            exportingIndicator.css({
                "width": $gridContainer.outerWidth(),
                "height": $gridContainer.outerHeight()
            }).html('<span class="exporting-text">エクスポートしています...</span>');
            exportingIndicator.addClass("exporting-indicator");

            $gridContainer.append(exportingIndicator);
        }

        function hideExportingIndicator(exportingIndicator) {
            exportingIndicator.remove();
        }
    });
});