$(function () {
    $.ig.loader({
        scriptPath: "https://secure-cdn-na.infragistics.com/igniteui/2017.1/latest/js/",
        cssPath: "https://secure-cdn-na.infragistics.com/igniteui/2017.1/latest/css/",
        resources: 'igGrid.Sorting.Filtering,' +
            'igGridExcelExporter'
    });

    $.ig.loader(function () {
        var data = [
            { 'Name': 'Omnis ut illum nisi.', 'ProductNumber': 2973311236, "InStock": true, "Quantity": 56, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "07/25/2015" },
            { 'Name': 'Quis quibusdam qui.', 'ProductNumber': 5907101619, "InStock": false, "Quantity": 0, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "09/22/2014" },
            { 'Name': 'Sint laudantium et.', 'ProductNumber': 3057803521, "InStock": true, "Quantity": 26, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "08/13/2015" },
            { 'Name': 'Tempore eos.', 'ProductNumber': 3576608248, "InStock": true, "Quantity": 8, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "06/28/2014" },
            { 'Name': 'Maiores aut ducimus.', 'ProductNumber': 7079645227, "InStock": true, "Quantity": 62, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "04/19/2015" },
            { 'Name': 'Vel inventore.', 'ProductNumber': 191484500, "InStock": true, "Quantity": 18, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "07/21/2015" },
            { 'Name': 'Ut molestiae.', 'ProductNumber': 2994899561, "InStock": false, "Quantity": 0, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "03/10/2016" },
            { 'Name': 'Nihil magnam aut ut.', 'ProductNumber': 5652753011, "InStock": true, "Quantity": 41, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "07/25/2016" },
            { 'Name': 'Repellendus dolorum.', 'ProductNumber': 8807902556, "InStock": true, "Quantity": 10, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "09/01/2017" },
            { 'Name': 'Odit ut quo minus.', 'ProductNumber': 1083007847, "InStock": false, "Quantity": 0, VendorWebsite: 'http://infragistics.com/', DeliveryDate: "11/10/2015" }
        ];

        $("#grid").igGrid({
            autoGenerateColumns: false,
            columns: [
                { headerText: "製品名", key: "Name", dataType: "string", width: "250px" },
                { headerText: "製品番号", key: "ProductNumber", dataType: "number", width: "200px" },
                { headerText: "在庫", key: "InStock", dataType: "bool", width: "150px" },
                { headerText: "数量", key: "Quantity", dataType: "number", width: "150px" },
                { headerText: "仕入先ウェブサイト", key: "VendorWebsite", width: "220px", template: '<a href="${VendorWebsite}">${VendorWebsite}</a>' },
				{ headerText: "出荷日付", key: "DeliveryDate", dataType: "date", width: "200px" },
            ],
            dataSource: data,
            width: "100%",
            features: [
                {
                    name: "Filtering"
                },
                {
                    name: "Sorting",
                }
            ]
        });
	
        $("#exportButton").on("click", function () {
			var exportingOverlay = $('<div>');
            $.ig.GridExcelExporter.exportGrid($("#grid"), {
                fileName: "igGrid",
                gridFeatureOptions: { sorting: "applied", filtering: "applied" },
            },
            {
                exportStarting: function (e, args) {
                    showOverlay(args.grid, exportingOverlay);
                },
                success: function () {
                    hideOverlay(exportingOverlay);
                },
                cellExported: function (e, args) {
                    if (args.xlRow.index() == 0) {
                        return;
                    }
                    if (args.columnKey == "Quantity" && args.cellValue > 15) {
                        args.xlRow.getCellFormat(args.columnIndex).font().bold(1);
                        args.xlRow.getCellFormat(args.columnIndex).fill($.ig.excel.CellFill.createLinearGradientFill(45, '#FF0000', '#00FFFF'));
                    }
                    if (args.columnKey == 'VendorWebsite') {
                        var xlRow = args.xlRow;
                        xlRow.cells(args.columnIndex).applyFormula('=HYPERLINK("' + args.cellValue + '")');
                    }
                },
                exportEnding: function (e, args) {
                    args.worksheet.columns().item(5).cellFormat().formatString("dd/MMM/YYYY");
                },
            });
        });
    });
	
    function showOverlay(grid, exportingOverlay) {
        var $gridContainer = $('#' + grid.attr('id') + '_container');

        exportingOverlay.css({
            "width": $gridContainer.outerWidth(),
            "height": $gridContainer.outerHeight()
        }).html('<span class="exporting-text">エクスポートしています...</span>');
        exportingOverlay.addClass("exporting-overlay");

        $gridContainer.append(exportingOverlay);
    }

    function hideOverlay(exportingOverlay) {
        exportingOverlay.remove();
    }
});