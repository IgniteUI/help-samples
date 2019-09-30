$(function () {
    $("#map").igMap({
        width: "700px",
        height: "500px",
        windowRect: { left: 0.1, top: 0.1, height: 0.7, width: 0.7 },
        backgroundContent: {
            type: "openStreet"
        },
        series: [{
            type: "geographicSymbol",
            name: "worldCities",
            dataSource: data,
            latitudeMemberPath: "Latitude",
            longitudeMemberPath: "Longitude",
            markerType: "automatic",
            markerCollisionAvoidance: "fade",
            markerOutline: "#1142a6",
            markerBrush: "#7197e5",
            showTooltip: true,
            tooltipTemplate: "customTooltip"
        }]
    });
    $("#map").find(".ui-widget-content").append("<span class='copyright-notice'><a href='http://www.openstreetmap.org/copyright'>© OpenStreetMap contributors</a></span>");
});