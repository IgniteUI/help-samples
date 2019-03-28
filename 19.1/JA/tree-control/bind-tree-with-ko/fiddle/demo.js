$(function () {
    var viewModel;

    //  Define empty objects for Category and Product to be used when
    //  nothing is to be rendered in the editor controls
    ViewModel.prototype.categoryEmpty = {
        CategoryName: "",
        Description: "",
        ProductCount: 0
    };
    ViewModel.prototype.productEmpty = {
        ProductName: "",
        QuantityPerUnit: 0.0,
        UnitPrice: 0.0,
        UnitsInStock: 0.0,
        UnitsOnOrder: 0.0,
        Discontinued: false
    };

    //  Creates a ViewModel object
    function ViewModel(categories) {
        var self = this;

        this.data = categories;
        this.Category = ko.observable(self.categoryEmpty);
        this.Product = ko.observable(self.productEmpty);

        this.SetSelected = function (item) {
            if (item.ProductName != null) {
                self.Product(item);
            }
            else if (item.CategoryName != null) {
                self.Category(item);
                self.Product(self.productEmpty);
            }
        };
    };

    $(function () {
        $(".message").ajaxError(function () {
            $(this).css("color", "red");
            $(this).text("製品カテゴリを取得するエラーが発生しました。");
        });
        //  Get all the Categories and their related Products from the Northwind database
           $.getJSON("http://igniteui.com/api/categories?callback=?", function (data) {
            viewModel = new ViewModel(ko.mapping.fromJS(data.d.results));

            viewModel.Category.subscribe(function (item) {
                setContainerVisible(item, "#categoryEditorsContainer");
            });

            viewModel.Product.subscribe(function (item) {
                setContainerVisible(item, "#productEditorsContainer");
            });

            ko.applyBindings(viewModel);
            $(".message").hide();
        }, 'json');
    });

    function setContainerVisible(item, containerSelector) {
        if (item != null && item.hasOwnProperty("ID")) {
            $(containerSelector).show();
        }
        else {
            $(containerSelector).hide();
        }
    }

    $(function () {
        $(document).on("igtreeselectionchanged", "#tree", function (evt, ui) {
        	if (ui.newNodes.length > 0) {
        		var parentElement = $("#tree").igTree("parentNode", ui.newNodes[0].element);
        		//  Set selected Category to be the category of the selected product
        		if (parentElement) {
        			var parentNode = $("#tree").igTree("nodeFromElement", parentElement);
        			viewModel.SetSelected(parentNode.data);
        			setTimeout(function () {
        				if ($(window).width() < 600) {
        					$("#productEditorsContainer").focus();
        				}
        			}, 0);
        		} else {
        			setTimeout(function () {
        				if ($(window).width() < 600) {
        					$("#categoryEditorsContainer").focus();
        				}
        			}, 0);
        		}
        		viewModel.SetSelected(ui.newNodes[0].data);
        	}
        });
    });
});