$(function () {
    var sampleApp = angular.module('sampleApp', ['igniteui-directives']);
    sampleApp.controller('dataChartController', function ($scope) {
        $scope.dataChart = [
	        { "CountryName": "中国", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
	        { "CountryName": "インド", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
	        { "CountryName": "米国", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
	        { "CountryName": "インドネシア", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
	        { "CountryName": "ブラジル", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
        ];
    });
});