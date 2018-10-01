$(function () {
    var sampleApp = angular.module('sampleApp', ['igniteui-directives']);
    sampleApp.controller('editorsController', function ($scope) {
        $scope.editors = {
            currency: 12.1,
            date: new Date(),
            editor: 'Infragistics',
            mask: '134-134-134',
            numeric: 123,
            percent: 0.12,
            text: 'Ignite UI'
        };
    });
});