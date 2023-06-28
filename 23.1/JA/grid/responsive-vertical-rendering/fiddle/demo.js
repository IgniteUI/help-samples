$(function () {
    var data = [
            { "columnKey": "CompanyName", "columnHeader": "会社名" },
            { "columnKey": "ContactName", "columnHeader": "名前" },
            { "columnKey": "ContactTitle", "columnHeader": "連絡先" },
            { "columnKey": "Address", "columnHeader": "住所" },
            { "columnKey": "City", "columnHeader": "市" }
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
            { headerText: "顧客 ID", key: "ID", dataType: "string", hidden: true },
            { headerText: "会社名", key: "CompanyName", dataType: "string" },
            { headerText: "名前", key: "ContactName", dataType: "string" },
            { headerText: "連絡先", key: "ContactTitle", dataType: "string" },
            { headerText: "住所", key: "Address", dataType: "string" },
            { headerText: "市", key: "City", dataType: "string" },
            { headerText: "国名", key: "Country", dataType: "string", hidden: true }
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