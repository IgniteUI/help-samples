$(function () {
    $.support.cors = true;

    $(function () {
        $("#pivotView").igPivotView({
            dataSourceOptions: {
                xmlaOptions: {
                    serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',
                    catalog: 'Adventure Works DW Standard Edition',
                    cube: 'Adventure Works'
                },
                rows: "[Ship Date].[Calendar]",
                columns: "[Delivery Date].[Calendar]",
                measures: "[Measures].[Product Gross Profit Margin Status],[Measures].[Product Gross Profit Margin Goal]",
            }
        });
    });
});