$(function () {
    var dynamicModel,
        overallProfit = 0,
       MTHS = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"],
        MONTHS = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月",
                "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"];
        
    // KO related functionallity starts here
    function generateData() {
        var num = 12, data = [], rand1, rand2, rand3;
        overallProfit = 0;
        for (var i = 0; i < num; i++) {
            rand1 = Math.random() * 50.0;
            rand2 = Math.random() * 40.0;
            rand3 = rand1 - rand2;
            overallProfit += rand3;
            data[i] = {
                index: ko.observable(i),
                month: ko.observable(MTHS[i]),
                revenue: ko.observable(rand1),
                expenses: ko.observable(rand2),
                profit: ko.observable(rand3)
            };
        }
        return data;
    }

    function randomizeData() {
    	var num = 12, rand1, rand2, rand3;
    	overallProfit = 0;
    	for (var i = 0; i < num; i++) {
    		rand1 = Math.random() * 50.0;
    		rand2 = Math.random() * 40.0;
    		rand3 = rand1 - rand2;
    		overallProfit += rand3;
    		dynamicModel.data[i].revenue(rand1);
    		dynamicModel.data[i].expenses(rand2);
    		dynamicModel.data[i].profit(rand3);
    	}
    }

    function ViewModel(data) {
    	var self = this;
        this.data = data;
        this.chartThickness = 2;
        this.transitionDuration = 1000;
        this.chartIntervalX = 1;
        this.revenueColor = "#a4ba29";
        this.expensesColor = "#d3404b";
        this.profitColor = "#216EDD";
        this.outlineColor = "black";
    	this.yearProfit = ko.observable(overallProfit * 1000000);
    	this.months = ko.mapping.fromJS(MTHS);
    	this.currMonth = ko.observableArray([MTHS[3]]);
    	this.currMonthLong = ko.computed(function () {
    		return MONTHS[MTHS.indexOf(self.currMonth()[0])];
    	});
    	this.formatMonth = function (value) {
    		return MTHS[value];
    	}
    	this.currentIndex = ko.computed(function () {
    		return MTHS.indexOf(self.currMonth()[0]);
    	});
        this.currentRevenue = ko.computed({
            read: function () {
                return this.data[this.currentIndex()].revenue();
            },
            write: function (value) {
                this.data[this.currentIndex()].revenue(value);
            },
            owner: this
        });
        this.currentExpenses = ko.computed({
            read: function () {
                return this.data[this.currentIndex()].expenses();
            },
            write: function (value) {
                this.data[this.currentIndex()].expenses(value);
            },
            owner: this
        });
        this.currentProfit = ko.computed({
            read: function () {
                var currentItem = this.data[this.currentIndex()],
                    newProfit = currentItem.revenue() - currentItem.expenses(),
                    mil = 1000000;
                this.yearProfit((this.yearProfit()/mil - currentItem.profit() + newProfit)*mil);
                this.data[this.currentIndex()].profit(newProfit);
                return newProfit;
            },
            write: function (value) {
                var currentItem = this.data[this.currentIndex()],
                    mil = 1000000,
                    tempRevenue = currentItem.expenses() + value;
                this.yearProfit((this.yearProfit()/mil - currentItem.profit() + value)*mil);
                currentItem.profit(value);

                if (tempRevenue <= 50 && tempRevenue >= 0) {
                    currentItem.revenue(tempRevenue);
                    animateChartBorder("polarSplineChartRevenue");
                } else {
                    tempRevenue = (tempRevenue > 50) ? 50 : 0;
                    currentItem.revenue(tempRevenue);
                    currentItem.expenses(tempRevenue - value);
                    animateChartBorder("polarSplineChartExpenses");

                }
            },
            owner: this
        });
    }
    dynamicModel = new ViewModel(generateData());
    ko.applyBindings(dynamicModel);
	// KO related functionallity ends here

    $(".btn-refresh").click(function (e) {
    	randomizeData();
    });
    $(".main-container").on("igtexteditortextchanged", "#ed-month", animateMonth);
    $(".main-container").on("ignumericeditortextchanged", "#ed-revenue", animateRevenue);
    $(".main-container").on("ignumericeditortextchanged", "#ed-expenses", animateExpenses);
    $(".main-container").on("ignumericeditortextchanged", "#ed-profit", animateProfit);
    function animateMonth() {
        animateChartBorder("lineChart");
        animateChartBorder("barColumnChart");
    }
    function animateRevenue() {
        animateAlways();
        animateChartBorder("polarSplineChartRevenue");
    }
    function animateExpenses() {
        animateAlways();
        animateChartBorder("polarSplineChartExpenses");
    }
    function animateProfit() {
        animateAlways();
    }
    function animateAlways() {
        animateChartBorder("lineChart"); animateChartBorder("barColumnChart");
        animateChartBorder("polarSplineChartProfit");
    }
    function animateChartBorder(id) {
        id = "#" + id + "_chart_container";
        $(id).stop().animate({ borderColor: '#FA0000' }, 1000, function () {
            $(id).stop().animate({ borderColor: '#B1B1B1' }, 1000);
        });
    }
});