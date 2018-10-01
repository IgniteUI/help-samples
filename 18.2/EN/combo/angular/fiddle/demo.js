$(function () {
    var sampleApp = angular.module('sampleApp', ['igniteui-directives']);
    sampleApp.controller('comboController', function ($scope) {
        $scope.data = northwindProducts.results;

        $scope.combo = {
            value1: 20,
            value2: "Chang"
        };
    });
});