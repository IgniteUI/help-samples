$(function () {
    var xmlDoc =
        '<CompanyBudget>' +
            '<BudgetEntry Department="開発" Budget="100" />' +
            '<BudgetEntry Department="IT" Budget="60" />' +
            '<BudgetEntry Department="セールス" Budget="60" />' +
            '<BudgetEntry Department="マーケティング" Budget="50" />' +
            '<BudgetEntry Department="事務" Budget="30" />' +
            '<BudgetEntry Department="サポート" Budget="20" />' +
        '</CompanyBudget>';

    $(function () {
        //Binding to XML requires a schema to define data fields
        var xmlSchema = new $.ig.DataSchema("xml",
            {
                //searchField serves as the base node(s) for the XPaths
                searchField: "//BudgetEntry",
                fields: [
                    { name: "Department", xpath: "./@Department" },
                    { name: "Budget", xpath: "./@Budget", type: "number" }
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

        //  Create a basic funnel chart
        $("#funnel").igFunnelChart({
            width: "100%",
            height: "450px",
            dataSource: ds,
            valueMemberPath: "Budget",
            innerLabelMemberPath: "Budget",
            innerLabelVisibility: "visible",
            outerLabelMemberPath: "Department",
            outerLabelVisibility: "visible"
        });
    });
});