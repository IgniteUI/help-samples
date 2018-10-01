$(function () {

    var data = [
              { "ID":1, "Name": "John Smith", "Age": 45 },
              { "ID":2, "Name": "Mary Johnson", "Age": 32 },
              { "ID":3, "Name": "Bob Ferguson", "Age": 27 }
        ];
    
    $("#combo").igCombo({
        dataSource: data, //JSON Array defined above
        valueKey: "ID",
        textKey: "Name"
    });
});