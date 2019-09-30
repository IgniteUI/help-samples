$(function () {
    var data = [
            { "columnKey": "CompanyName", "columnHeader": "Company Name" },
            { "columnKey": "ContactName", "columnHeader": "Contact Name" },
            { "columnKey": "ContactTitle", "columnHeader": "Contact Title" },
            { "columnKey": "Address", "columnHeader": "Address" },
            { "columnKey": "City", "columnHeader": "City" }
    ];

    $("#gridColumns").igCombo({
        dataSource: data, //JSON Array defined above
        valueKey: "columnKey",
        textKey: "columnHeader",
        width: "300px",
        mode: "dropdown",
        height: "25px",
        selectedItems: [{index: 0}]
    });

    $( "#igButtonSort" ).igButton( {
        labelText: $( "#igButtonSort" ).val(),
        height: "25px"
    } );

    $("#igButtonSort").on({
        click: function (e) {
            var columnKey = $( "#gridColumns" ).igCombo( "value" );
            if ( columnKey ) {
                $( '#grid7' ).igGridSorting( 'sortColumn', columnKey, 'ascending' );
            }
        }
    });

    $("#grid7").igGrid({
        columns: [
            { headerText: "Customer ID", key: "ID", dataType: "string", hidden: true },
            { headerText: "Company Name", key: "CompanyName", dataType: "string" },
            { headerText: "Contact Name", key: "ContactName", dataType: "string" },
            { headerText: "Contact Title", key: "ContactTitle", dataType: "string" },
            { headerText: "Address", key: "Address", dataType: "string" },
            { headerText: "City", key: "City", dataType: "string" },
            { headerText: "Country", key: "Country", dataType: "string", hidden: true }
        ],
        primaryKey: "ID",
        autoGenerateColumns: false,
        dataSource: nwCustomersWithOrders,
        height: "600px",
        width: "100%",
        features: [
            {
                name: "Responsive",
                enableVerticalRendering: true,
                reactOnContainerWidthChanges: true,
                windowWidthToRenderVertically: null,
                propertiesColumnWidth: "40%",
                valuesColumnWidth: "60%",
                allowedColumnWidthPerType: {
                    string: 300,
                    number: 100,
                    bool: 100,
                    date: 100,
                    object: 150
                }
            },
            {
                name: "Paging",
                type: "local",
                pageSize: 5
            },
            {
                name: "Sorting",
                type: "local"
            }
        ]
    });            
});