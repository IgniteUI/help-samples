$(function () {
    $("#grid").igGrid({
        columns: [
            { headerText: "Company Name", key: "CompanyName", dataType: "string", width: "20%" },
            { headerText: "Contact Name", key: "ContactName", dataType: "string", width: "15%" },
            { headerText: "Contact Title", key: "ContactTitle", dataType: "string", width: "20%" },
            { headerText: "Address", key: "Address", dataType: "string", width: "20%" },
            { headerText: "City", key: "City", dataType: "string", width: "10%" },
            { headerText: "Country", key: "Country", dataType: "string", width: "15%" }
        ],
        autoGenerateColumns: false,
        autofitLastColumn: false,
        dataSource: nwCustomersWithOrders,
        width: "100%",
        features: [
            {
                name: "Responsive",
                enableVerticalRendering: false,
                columnSettings: [
                    {
                        columnKey: "ContactName",
                        configuration: {
                            customPhone: {
                                hidden: true
                            },
                            customAlt: {
                                hidden: false
                            }
                        }
                    },
                    {
                        columnKey: "ContactTitle",
                        configuration: {
                            customPhone: {
                                hidden: true
                            },
                            customAlt: {
                                hidden: false
                            }
                        }
                    },
                    {
                        columnKey: "Address",
                        configuration: {
                            customPhone: {
                                template: "${Address}, ${City}, ${Country}"
                            },
                            customAlt: {
                                hidden: false
                            }
                        }
                    },
                    {
                        columnKey: "City",
                        configuration: {
                            customPhone: {
                                hidden: true
                            },
                            customAlt: {
                                hidden: false
                            }
                        }
                    },
                    {
                        columnKey: "Country",
                        configuration: {
                            customPhone: {
                                hidden: true
                            },
                            customAlt: {
                                hidden: false
                            }
                        }
                    }
                ],
                responsiveModes: {
                    customPhone: {
                        minWidth: 0,
                        maxWidth: 600
                    },
                    // alternative mode
                    customAlt: {
                        minWidth: 601,
                        maxWidth: Number.MAX_VALUE
                    }
                }
            },
            {
                name: "Paging",
                pageSize: 5
            }
        ]
    });
});