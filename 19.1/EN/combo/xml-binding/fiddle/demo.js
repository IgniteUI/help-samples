$(function () {
                
    //Sample XML Data
    var xmlDoc = '<People>' +
        '<Person ID="1" Name="Gustavo Achong" />' +
        '<Person ID="2" Name="Catherine Abel" />' +
        '<Person ID="3" Name="Kim Abercrombie" />' +
    '</People>';

    //Binding to XML requires a schema to define data fields
    var xmlSchema = new $.ig.DataSchema("xml",
        { 
            //searchField serves as the base node(s) for the XPaths
            searchField: "//Person", 
            fields: [
                { name: "ID", xpath: "./@ID" },
                { name: "Name", xpath: "./@Name" }
            ]
        }
    );

    //This creates an Infragistics datasource from the XML 
    //and the Schema which can be consumed by the grid.
    var ds = new $.ig.DataSource({
        type: "xml",
        dataSource: xmlDoc,
        schema: xmlSchema 
    });

    $("#combo").igCombo({
        dataSource: ds, //$.ig.DataSource defined above
        valueKey: "ID",
        textKey: "Name"
    });

});