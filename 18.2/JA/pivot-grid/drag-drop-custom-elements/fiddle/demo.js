$(function () {
    $.support.cors = true;

    $(function () {
        var dataSource = new $.ig.OlapFlatDataSource({
            dataSource: sales,
            metadata: {
                cube: {
                    name: "Sales",
                    caption: "セールス",
                    measuresDimension: {
                        caption: "メジャー",
                        measures: [
                            { caption: "販売単位数", name: "UnitsSold", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitsSold') },
                            { caption: "単価", name: "UnitPrice", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitPrice', 2) }]
                    },

                    dimensions: [
                        {
                            caption: "日付", name: "Date", hierarchies: [
                                $.ig.OlapUtilities.prototype.getDateHierarchy(
                                    "Date", ["year", "quarter", "month", "date"], "Dates", "日付",
                                    ["年", "四半期", "月", "日"], "すべての期間")]
                        },
                        {
                            caption: "位置", name: "Location", hierarchies: [{
                                caption: "位置", name: "Location", levels: [
                                    { name: "AllLocations", levelCaption: "すべての場所", memberProvider: function (item) { return "すべての場所"; } },
                                    { name: "Country", levelCaption: "国", memberProvider: function (item) { return item.Country; } },
                                    { name: "City", levelCaption: "市", memberProvider: function (item) { return item.City; } }]
                            }]
                        },
                        {
                            caption: "製品", name: "Product", hierarchies: [{
                                caption: "製品", name: "Product", levels: [
                                    { name: "AllProducts", levelCaption: "すべての製品", memberProvider: function (item) { return "すべての製品"; } },
                                    { name: "ProductCategory", levelCaption: "カテゴリ", memberProvider: function (item) { return item.ProductCategory; } }]
                            }]
                        },
                        {
                            caption: "販売員", name: "Seller", hierarchies: [{
                                caption: "販売員", name: "Seller", levels: [
                                    { name: "AllSellers", levelCaption: "すべての販売員", memberProvider: function (item) { return "すべての販売員"; } },
                                    { name: "SellerName", levelCaption: "販売員", memberProvider: function (item) { return item.SellerName; } }]
                            }]
                        }
                    ]
                }
            },
            rows: "[Date].[Dates]",
            columns: "[Product].[Product]",
            measures: "[Measures].[UnitPrice]"
        });

        $('#dataSelector').igPivotDataSelector({
            dataSource: dataSource,
            height: "565px"
        });

        $("#pivotGrid").igPivotGrid({
            dataSource: dataSource,
            height: "565px",
            width: "660px"
        });

        $(".custom-draggable").draggable({
            // You must set this option in a similar manner, because the pointer is used when 
            // calculating the drop position and its top should not be blocked by the dragged element
            cursorAt: {
                top: -10,
                left: 10
            },
            helper: "clone"
        });
    });
});