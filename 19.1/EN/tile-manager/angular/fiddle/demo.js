$(function () {
    var sampleApp = angular.module('sampleApp', ['igniteui-directives']);
    sampleApp.controller('tileManagerController', function ($scope) {
        $scope.data = dataSource;
    });
});