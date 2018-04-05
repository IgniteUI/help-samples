$(function () {
    //jsRender helper function which formats the string date
    $.views.helpers({
        formatDate: function (val) {
            var date = new Date(val);
            if (!isNaN(date) && ($.type(date) === "date")) {
                return $.ig.formatter(date, "date", "dateTime");
            }
            return val;
        }
    });

    $('#autoAppendRowsOnDemand').igGrid({
    	dataSource: adventureWorks,
    	autoGenerateColumns: false,
    	columns: [
			{ headerText: "製品名", key: "Name", dataType: "string", width: "20%" },
			{ headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "20%" },
			{ headerText: "メーカー フラグ", key: "MakeFlag", dataType: "bool", width: "10%" },
			{ headerText: "再注文", key: "ReorderPoint", dataType: "number", width: "10%" },
			{ headerText: "販売の開始日付", key: "SellStartDate", dataType: "date", width: "15%" }
		],
        enableUTCDates: true,
        features: [
            {
                chunkIndexUrlKey: 'page',
                chunkSizeUrlKey: 'pageSize',
                name: 'AppendRowsOnDemand',
                loadTrigger: 'auto'
            }
        ],
        width: '100%',
        height: '300px',
        templatingEngine: 'jsrender'
    });

    $('#buttonAppendRowsOnDemand').igGrid({
    	dataSource: adventureWorks,
        autoGenerateColumns: false,
        enableUTCDates: true,
        columns: [
			{ headerText: "製品名", key: "Name", dataType: "string", width: "20%" },
			{ headerText: "製品番号", key: "ProductNumber", dataType: "string", width: "20%" },
			{ headerText: "メーカー フラグ", key: "MakeFlag", dataType: "bool", width: "10%" },
			{ headerText: "再注文", key: "ReorderPoint", dataType: "number", width: "10%" },
			{ headerText: "販売の開始日付", key: "SellStartDate", dataType: "date", width: "15%" }
		],
        features: [
            {
                chunkIndexUrlKey: 'page',
                chunkSizeUrlKey: 'pageSize',
                name: 'AppendRowsOnDemand',
                loadTrigger: 'button'
            }
        ],
        width: '100%',
        height: '300px',
        templatingEngine: 'jsrender'
    });
});