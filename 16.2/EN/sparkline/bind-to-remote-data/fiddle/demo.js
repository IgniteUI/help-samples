$(function () {

    $("#sparkline").igSparkline({
        dataSource: "http://igniteui.com/api/invoices?callback=?",
        responseDataKey: "d.results",
        height: "100px",
        width: "100%",
        valueMemberPath: 'ExtendedPrice'
    });

});