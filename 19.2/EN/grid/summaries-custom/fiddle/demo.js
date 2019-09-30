$(function () {
    $("#grid").igGrid({
        autoGenerateColumns: false,
        width: "100%",
        height: "400px",
        columns: [
            { headerText: "Product ID", key: "ProductID", dataType: "number", width: "25%" },
            { headerText: "Product Name", key: "Name", dataType: "string", width: "30%" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string", width: "20%" },
            { headerText: "Make Flag", key: "MakeFlag", dataType: "bool", width: "25%" }
        ],
        dataSource: adventureWorks,
        features: [
            {
                name: "Summaries",
                columnSettings: [
                    {
                        columnKey: "MakeFlag",
                        summaryOperands: [
                            {
                                rowDisplayLabel: "Count True Values",
                                type: "custom1",
                                summaryCalculator: $.proxy(countTrueValues, this),
                                order: 5
                            },
                            {
                                rowDisplayLabel: "Count False Values",
                                type: "custom2",
                                summaryCalculator: $.proxy(countFalseValues, this),
                                order: 6
                            }
                        ]
                    }
                ]
            }
        ]
    });
});

function countTrueValues(data) {
    var i, l = data.length, count = 0, elem;
    for (i = 0; i < l; i++) {
        elem = data[i];
        if (elem === true) {
            count++;
        }
    }
    return count;
}

function countFalseValues(data) {
    var i, l = data.length, count = 0, elem;
    for (i = 0; i < l; i++) {
        elem = data[i];
        if (elem === false) {
            count++;
        }
    }
    return count;
}