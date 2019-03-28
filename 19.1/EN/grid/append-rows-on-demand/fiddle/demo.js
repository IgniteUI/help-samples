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
			{ headerText: "Product Name", key: "Name", dataType: "string", width: "20%" },
			{ headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
			{ headerText: "Make Flag", key: "MakeFlag", dataType: "bool", width: "10%" },
			{ headerText: "Reorder Point", key: "ReorderPoint", dataType: "number", width: "10%" },
			{ headerText: "Sell Start Date", key: "SellStartDate", dataType: "date", width: "15%" }
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
			{ headerText: "Product Name", key: "Name", dataType: "string", width: "20%" },
			{ headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
			{ headerText: "Make Flag", key: "MakeFlag", dataType: "bool", width: "10%" },
			{ headerText: "Reorder Point", key: "ReorderPoint", dataType: "number", width: "10%" },
			{ headerText: "Sell Start Date", key: "SellStartDate", dataType: "date", width: "15%" }
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