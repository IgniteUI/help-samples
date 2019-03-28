$(function () {
    $("#hierarchicalGrid").igHierarchicalGrid({
        width: "100%",
        autoGenerateColumns: false,
        dataSource: northwind,
        responseDataKey: "results",
        dataSourceType: "json",
        caption: "従業員の注文",
        features: [
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: "Title",
                        classes: "ui-hidden-phone"
                    },
                    {
                        columnKey: "Address",
                        classes: "ui-hidden-phone"
                    }
                ]
            },
            {
                name: "Sorting",
                inherit: true
            },
            {
                name: "Paging",
                pageSize: 5,
                type: "local",
                inherit: true
            }
        ],
        columns: [
           { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "0%", hidden: true },
            { key: "FirstName", headerText: "名前", dataType: "string", width: "20%" },
           { key: "LastName", headerText: "名字", dataType: "string", width: "20%" },
           { key: "Title", headerText: "役職", dataType: "string", width: "20%" },
           { key: "Address", headerText: "住所", dataType: "string", width: "25%" },
           { key: "City", headerText: "市/州", dataType: "string", width: "15%" }
        ],
        autoGenerateLayouts: false,
        columnLayouts: [
            {
                key: "Orders",
                responseDataKey: "results",
                width: "100%",
                autoGenerateColumns: false,
                primaryKey: "OrderID",
                columns: [
                    { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "20%" },
                    { key: "CustomerID", headerText: "顧客 ID", dataType: "string", width: "0%", hidden: true },
                    { key: "ShipName", headerText: "配送先", dataType: "string", width: "20%" },
                    { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "20%" },
                    { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "20%" },
                    { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "20%" }
                ],
                features: [
                     {
                         name: "Responsive",
                         enableVerticalRendering: false,
                         columnSettings: [
                             {
                                 columnKey: "ShipAddress",
                                 classes: "ui-hidden-phone"
                             },
                             {
                                 columnKey: "ShipCity",
                                 classes: "ui-hidden-phone"
                             }
                         ]
                     },
                     {
                         name: "Summaries",
                         columnSettings: [
                              {
                                  columnKey: "OrderID",
                                  summaryOperands: [
                                      {
                                          rowDisplayLabel: "注文のカウント",
                                          type: "count",
                                          decimalDisplay: 3
                                      }
                                  ]

                              },
                             {
                                 columnKey: "ShipName",
                                 allowSummaries: false
                             },
                             {
                                  columnKey: "ShipAddress",
                                  allowSummaries: false
                             },
                             {
                                 columnKey: "ShipCity",
                                 summaryOperands: [
                                     {
                                         rowDisplayLabel: "サンパウロの注文",
                                         type: "custom1",
                                         summaryCalculator: $.proxy(countSaoPauloValues, this),
                                         order: 5,
                                         decimalDisplay: 1
                                     },
                                      {
                                          rowDisplayLabel: "ベルガモの注文",
                                          type: "custom2",
                                          summaryCalculator: $.proxy(countBergamoValues, this),
                                          order: 6,
                                          decimalDisplay: 1
                                      }
                                 ]
                             },
                              {
                                  columnKey: "ShipCountry",
                                  allowSummaries: false
                              },

                             
                         ]

                     }
                ]
            }
        ]
    });
  //expanding first parent row in the grid
    var parentGrid = $("#hierarchicalGrid").igHierarchicalGrid("rootWidget"),
    rowDomElement = parentGrid.rowAt(0);
    $("#hierarchicalGrid").igHierarchicalGrid("expand", rowDomElement);

    function countSaoPauloValues(data) {
        var i, l = data.length, count = 0, elem;
        for (i = 0; i < l; i++) {
            elem = data[i];
            if (elem === "Sao Paulo") {
                count++;
            }
        }
        return count;
    }
    function countBergamoValues(data) {
        var i, l = data.length, count = 0, elem;
        for (i = 0; i < l; i++) {
            elem = data[i];
            if (elem === "Bergamo") {
                count++;
            }
        }
        return count;
    }

});