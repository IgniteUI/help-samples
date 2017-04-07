$(function () {
    //jsRender helper function which formats the string date
    $.views.helpers({
        formatDate: function (val) {
            var date = new Date(val);
            if (!isNaN(date) && ($.type(date) === "date")) {
                return $.ig.formatter(date, "date", "dateTime");
            }
            return val;
        }
    });

    //Hide the button after all data is loaded.
    $(document).delegate("#buttonAppendRowsOnDemand", "iggridrendered", function (evt, ui) {
        $("#buttonAppendRowsOnDemand_loadMoreButton").click(function () {
            var totalRecCount = $("#buttonAppendRowsOnDemand").data("igGrid").dataSource.totalRecordsCount();
            var currentRecCount = $("#buttonAppendRowsOnDemand").data("igGrid").dataSource.totalLocalRecordsCount();
            var chunkSize = $("#buttonAppendRowsOnDemand").igGridAppendRowsOnDemand("option", "chunkSize");
                if (totalRecCount <= currentRecCount + chunkSize) {
                    $("#buttonAppendRowsOnDemand_loadMoreButton").hide();
                }
        });
    });

    $('#autoAppendRowsOnDemand').igGrid({
        dataSource: 'https://www.igniteui.com/api/tweets',
        responseDataKey: 'Records',
        autoGenerateColumns: false,
        enableUTCDates: true,
        columns: [
            {
                unbound: true,
                key: 'Tweets',
                headerText: 'Infragistics Tweets',
                template: '<div style=\'float:left\'><img src=\'../../images/ig_twitter_logo.png\' ></img></div><div class=\'tweet\'><p style=\'height:20px\'><span class=\'tweet-user\'>{{>User.Name}}</span><span class=\'tweet-screen-name\'>@{{>ScreenName}}</span><span class=\'tweet-date\'>{{>#view.hlp(\'formatDate\')(CreatedAt)}}</span></p><p class=\'tweet-text\'>{{>Text}}</p></div>'
            }
        ],
        features: [
            {
                recordCountKey: 'TotalRecordsCount',
                chunkIndexUrlKey: 'page',
                chunkSizeUrlKey: 'pageSize',
                name: 'AppendRowsOnDemand',
                loadTrigger: 'auto',
                type: 'remote'
            }
        ],
        width: '100%',
        height: '300px',
        templatingEngine: 'jsrender'
    });

    $('#buttonAppendRowsOnDemand').igGrid({
        dataSource: 'https://www.igniteui.com/api/tweets',
        responseDataKey: 'Records',
        autoGenerateColumns: false,
        enableUTCDates: true,
        columns: [
            {
                unbound: true,
                key: 'Tweets',
                headerText: 'Infragistics Tweets',
                template: '<div style=\'float:left\'><img src=\'../../images/ig_twitter_logo.png\' ></img></div><div class=\'tweet\'><p style=\'height:20px\'><span class=\'tweet-user\'>{{>User.Name}}</span><span class=\'tweet-screen-name\'>@{{>ScreenName}}</span><span class=\'tweet-date\'>{{>#view.hlp(\'formatDate\')(CreatedAt)}}</span></p><p class=\'tweet-text\'>{{>Text}}</p></div>'
            }
        ],
        features: [
            {
                recordCountKey: 'TotalRecordsCount',
                chunkIndexUrlKey: 'page',
                chunkSizeUrlKey: 'pageSize',
                name: 'AppendRowsOnDemand',
                loadTrigger: 'button',
                type: 'remote'
            }
        ],
        width: '100%',
        height: '300px',
        templatingEngine: 'jsrender'
    });
});