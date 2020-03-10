$(function () {
    var viewModel = {
        orderDate: ko.observable(new Date(2017, 0, 21)),
        shipDate: ko.observable(new Date(2017, 1, 15)),
        dueInDays: ko.observable(7),
        customerName: ko.observable("Peter Sanders"),
        contactPhone: ko.observable("318-555-6879"),
        advancePayment: ko.observable(516.89),
        discountPercent: ko.observable(0.08)
    };

    $(function () {
        ko.applyBindings(viewModel);
    });
});