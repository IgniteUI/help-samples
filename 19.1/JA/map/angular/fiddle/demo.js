$(function () {
    var sampleApp = angular.module('sampleApp', ['igniteui-directives']);

    $(function () {
        $("#map").find(".ui-widget-content").append("<span class='copyright-notice'><a href='http://www.openstreetmap.org/copyright'>© OpenStreetMap contributors</a></span>");
    });
});