$(function () {

    $("#sparkline").igSparkline({
        dataSource: "https://igniteui.com/api/invoices?callback=?",
        responseDataKey: "d.results",
        height: "100px",
        width: "100%",
        valueMemberPath: 'ExtendedPrice'
    });

});