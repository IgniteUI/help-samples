$(function () {
    var height = $('html').hasClass('touch') ? 500 : 350;
    $("#htmlEditor").igHtmlEditor({
        width: "99%",
        height: height,
        value: "Use the Insert code snippet button {;} to paste your code.",
        customToolbars: [
            {
                name: "CodeSnippets",
                collapseButtonIcon: "ui-igbutton-collapse",
                expandButtonIcon: "ui-igbutton-expand",
                items: [{
                    //Definition for insert code button
                    name: "appendCodeSnippet",
                    type: "button",
                    handler: openDialog,
                    scope: this,
                    props: {
                        isImage: {
                            value: false,
                            action: '_isSelectedAction'
                        },
                        imageButtonTooltip: {
                            value: "Insert Code Snippet",
                            action: '_tooltipAction'
                        },
                        imageButtonIcon: {
                            value: "ui-igbutton-code",
                            action: '_buttonIconAction'
                        }
                    }
                }],
            }],
        rendered: configIFrame
    });

    $("#dialog").igDialog({
        state: "closed",
        modal: true,
        draggable: true,
        resizable: false,
        height: "50%",
        headerText: "Place code here:",
        container: $("#htmlEditor_content"),
        headerText: "Place code here",
        showCloseButton: false,
    });

    $("#dialogTextArea").igTextEditor({
        textMode: "multiline",
        width: "95%"
    });

    $("#langsList").igCombo({
        mode: "dropdown",
        width: "200px"
    });

    $("#okButton").igButton({ labelText: "OK" });
    $("#cancelButton").igButton({ labelText: "Cancel" });

    $('#okButton').on({
        click: function () {
            handleContent();
            $("#htmlEditor").igHtmlEditor("contentWindow").highlightCode();
            $("#dialog").igDialog("close");
        }
    });

    $('#cancelButton').on({
        click: function () {
            $("#dialog").igDialog("close");
        }
    });
});

function openDialog(e, args) {
    var itemToSelect,
    closestCodeTag = $($("#htmlEditor").igHtmlEditor("range").commonAncestorContainer).closest('code');
    if (closestCodeTag.length !== 0) {
        $("#dialogTextArea").igTextEditor("option", "value", closestCodeTag.text());
        $("#langsList").igCombo("value", closestCodeTag[0].className.trim());
    }
    else {
        $("#dialogTextArea").igTextEditor("option", "value", "");
    }
    $("#dialog").igDialog("open");
};

function configIFrame() {
    // we insert the Prism.js resources in the iFrame that contains the htmlEditor text area
    var iFrameHead = $("#htmlEditor").igHtmlEditor("contentDocument").head;

    var prismcss = document.createElement('link');
    prismcss.rel = 'stylesheet';
    prismcss.href = '../css/prism.css';
    iFrameHead.appendChild(prismcss);

    var prismjs = document.createElement('script');
    prismjs.type = 'text/javascript';
    prismjs.src = '../js/external/prism.js';
    iFrameHead.appendChild(prismjs);

    var prismUtils = document.createElement('script');
    prismUtils.type = 'text/javascript';
    prismUtils.src = '../js/prismUtils.js';
    iFrameHead.appendChild(prismUtils);
}

function handleContent() {
    var $currCodeElement,
        iFrameBody = $("#htmlEditor").igHtmlEditor("contentWindow").document.body,
        codeElements = $(iFrameBody).find("code"),
        codeString = $("#dialogTextArea").igTextEditor("option", "value"),
        divTag = document.createElement("div"),
        preTag = document.createElement("pre"),
        lang = $("#langsList").igCombo("value"),
        codeTag = document.createElement("code");

    // building a <code> element that will contain the code snippet
    // the recommended way to define a code language is a language-xxxx class, which is what Prism uses
    codeTag.className = lang;
    codeTag.setAttribute("data-container-index", codeElements.length);
    preTag.appendChild(codeTag);
    divTag.appendChild(preTag);
    divTag.innerHTML = divTag.innerHTML + "<br />";

    // insert the <code> element into the html editor field
    var closesCodeTag = $($("#htmlEditor").igHtmlEditor("range").commonAncestorContainer).closest('code');
    if (closesCodeTag.length !== 0) {
        closesCodeTag.text(codeString);
        closesCodeTag[0].className = lang;
    }
    else {
        insertContent(divTag);
    }

    if (codeElements.length === 0) {
        $currCodeElement = $(iFrameBody).find("code");
        $currCodeElement.text(codeString);
    } else {
        $currCodeElement = $(iFrameBody).find("code[data-container-index=" + codeElements.length + "]")
        $currCodeElement.text(codeString);
    }
}

function insertContent(divTag) {
    var caretPosition = $("#htmlEditor").igHtmlEditor("range").startOffset;
    if ($("#htmlEditor").igHtmlEditor("range").commonAncestorContainer.tagName === undefined && caretPosition === 0) {
        $("#htmlEditor").igHtmlEditor("setContent", divTag, "html");
    } else {
        $("#htmlEditor").igHtmlEditor("insertAtCaret", divTag);
    }
}