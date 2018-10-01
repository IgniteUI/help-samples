$(function () {
    $("#grid1").igGrid({
        dataSource: northwindEmployees,
        primaryKey: "ID",
        width: "100%",
        height: "500px",
        autoGenerateColumns: false,
        columns: [
            { headerText: "Employee ID", key: "ID", dataType: "number", hidden: true },
            { headerText: "Image", key: "ImageUrl", dataType: "string", template: "<img width='100' height='90' src='${ImageUrl}'></img>" },
            { headerText: "Name", key: "Name", dataType: "string" },
            { headerText: "Title", key: "Title", dataType: "string" },
            { headerText: "Phone", key: "Phone", dataType: "string" },
            { headerText: "Hire Date", key: "HireDate", dataType: "date" }
        ],
        features: [
            {
                name: "Responsive",
                enableVerticalRendering: false,
                singleColumnTemplate: {
                    phone:
                        "<div style='float: left;'>" +
                            "<img width='100' height='90' src='${ImageUrl}'></img>" +
                        "</div>" +
                        "<div class='right' style='float: left; font-size: 1.1em;'>" +
                            "<span>Name:&nbsp;</span><span>${Name}</span><br/>" +
                            "<span>Title:&nbsp;</span><span>${Title}</span><br/>" +
                            "<span>Phone:&nbsp;</span><span><a href='${PhoneUrl}'>${Phone}</a></span><br/>" +
                            "<span>HireDate:&nbsp;</span><span>${HireDate}</span><br/>" +
                        "</div>",
                    tablet:
                        "<div style='float: left;'>" +
                            "<img width='100' height='90' src='${ImageUrl}'></img>" +
                        "</div>" +
                        "<div class='right' style='float: left; font-size: 0.9em;'>" +
                            "<span>Name:&nbsp;</span><span>${Name}</span><br/>" +
                            "<span>Title:&nbsp;</span><span>${Title}</span><br/>" +
                            "<span>Phone:&nbsp;</span><span><a href='${PhoneUrl}'>${Phone}</a></span><br/>" +
                            "<span>HireDate:&nbsp;</span><span>${HireDate}</span><br/>" +
                        "</div>"
                }
            }
        ]
    });
});