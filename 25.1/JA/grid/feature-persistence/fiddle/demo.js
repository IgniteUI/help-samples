$(function () {
    $("#grid").igGrid({
        primaryKey: "EmployeeID",
        width: '100%',
        defaultColumnWidth: "15%",
        columns: [
           { headerText: "従業員 ID", key: "EmployeeID", dataType: "number" },
           { headerText: "名前", key: "FirstName", dataType: "string" },
           { headerText: "名字", key: "LastName", dataType: "string" },
           { headerText: "生年月日", key: "BirthDate", dataType: "date" },
           { headerText: "市", key: "City", dataType: "string" },
           { headerText: "国", key: "Country", dataType: "string" }
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