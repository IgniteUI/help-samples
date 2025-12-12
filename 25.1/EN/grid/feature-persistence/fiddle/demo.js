$(function () {
    $("#grid").igGrid({
        primaryKey: "EmployeeID",
        width: '100%',
        defaultColumnWidth: "15%",
        columns: [
           { headerText: "Employee ID", key: "EmployeeID", dataType: "number" },
           { headerText: "First Name", key: "FirstName", dataType: "string" },
           { headerText: "Last Name", key: "LastName", dataType: "string" },
           { headerText: "Birth Date", key: "BirthDate", dataType: "date" },
           { headerText: "City", key: "City", dataType: "string" },
           { headerText: "Country", key: "Country", dataType: "string" }
        ],
        autofitLastColumn: false,
        autoGenerateColumns: false,
        dataSource: northwind,
        responseDataKey: "results",
        features: [
            {
                name: "Sorting",
                type: "local",
                mode: "multi",
                persist: true
            },
            {
                name: "Filtering",
                type: "local",
                persist: true
            },
            {
                name: "GroupBy",
                type: "local",
                persist: true
            },
            {
                name: "Selection",
                mode: 'row',
                multipleSelection: true,
                persist: true
            },
            {
                name: "RowSelectors",
                enableCheckBoxes: true
            },
            {
                name: "Paging",
                type: "local",
                pageSize: 5
            }
        ]
    } );
    $( "#buttonDataBind" ).igButton( {
        labelText: $( "#buttonDataBind" ).val(),
        click: function ( e )
        {
            $( "#grid" ).igGrid( "dataBind" );
        }
    } );
});