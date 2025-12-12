$(function () {
                
    //Sample XML Data
    var xmlDoc = '<Countries>' +
        '<Country Name="中国" Population="1333" />' +
        '<Country Name="インド" Population="1140" />' +
        '<Country Name="米国" Population="304" />' +
        '<Country Name="インドネシア" Population="228" />' +
        '<Country Name="ブラジル" Population="192" />' +
    '</Countries>';

    //Binding to XML requires a schema to define data fields
    var xmlSchema = new $.ig.DataSchema("xml",
        { 
            //searchField serves as the base node(s) for the XPaths
            searchField: "//Country", 
            fields: [
                { name: "Name", xpath: "./@Name" },
                { name: "Population", xpath: "./@Population", type: "number" },
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

    $("#chart").igPieChart({
        width: "435px",
        height: "435px",
        dataSource: ds, //$.ig.DataSource defined above
        dataValue: "Population",
        dataLabel: "Name",
        labelsPosition: "bestFit",
		explodedSlices: [0,2,3,4]
    });

});