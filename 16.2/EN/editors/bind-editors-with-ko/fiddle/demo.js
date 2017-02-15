$(function () {
    var viewModel = {
        orderDate: ko.observable("10/24/2012"),
        shipDate: ko.observable("11/12/2012"),
        dueInDays: ko.observable(7),
        customerName: ko.observable("Peter Sanders"),
        contactPhone: ko.observable("318-555-6879"),
        advancePayment: ko.observable(516.89),
        discountPercent: ko.observable(8)
    };

    $(function () {
        ko.applyBindings(viewModel);
    });
});