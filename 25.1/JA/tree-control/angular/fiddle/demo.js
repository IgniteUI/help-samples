$(function () {
    var sampleApp = angular.module('sampleApp', ['igniteui-directives']);
    sampleApp.controller('treeController', function ($scope) {
        $scope.data = files;
    });
});