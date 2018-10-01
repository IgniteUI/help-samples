$(function () {
    var customerOrdersModel, modifiedDataSource = {}, Records = [], db = northwind.results;

    $(function () {

        for (var i = 0; i < db.length; i++) {
            var currentItem = {};
            currentItem["EmployeeID"] = db[i].EmployeeID;
            currentItem["FirstName"] = db[i].FirstName;
            currentItem["LastName"] = db[i].LastName;
            currentItem["City"] = db[i].City;
            currentItem["Country"] = db[i].Country;
            var orders = db[i].Orders.results.splice(0,10);
            for (var j = 0; j < 10; j++) {
                orders[j].RecordsOrderDate = normalizeDate( orders[j].OrderDate );
            }
            currentItem["Orders"] = orders;
            Records.push(currentItem);
        }

        modifiedDataSource["Records"] = Records;
        customerOrdersModel = ko.mapping.fromJS( modifiedDataSource );
        ko.applyBindings(customerOrdersModel);
    });

    function normalizeDate(date) {
        // Note: dataSource in grid requires Date object for a column with dataType:"date".
        if (!date)
            return null;
        if (date.getTime)
            return date;
        if (!date.substring)
            return null;
        if (date.indexOf("(") > 0)
            return new Date(parseInt(date.substring(date.indexOf("(") + 1, date.lastIndexOf(")"))));
        return Date.parse(date);
    }
});