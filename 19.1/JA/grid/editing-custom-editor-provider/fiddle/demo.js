$(function () {
    var northwindEmployees = [
        { "ID": 1, "Name": "Davolio, Nancy", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/1.png", "Phone": "(206) 555-9857", "PhoneUrl": "tel:(206) 555-9857", "BirthDate": "\/Date(480808800000)\/", "HireDate": "\/Date(1224795600000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "Russian" }] },
        { "ID": 2, "Name": "Fuller, Andrew", "Title": "Vice President, Sales", "ImageUrl": "../../images/samples/nw/employees/2.png", "Phone": "(206) 555-9482", "PhoneUrl": "tel:(206) 555-9482", "BirthDate": "\/Date(433458000000)\/", "HireDate": "\/Date(1269640800000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "German" }] },
        { "ID": 3, "Name": "Leverling, Janet", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/3.png", "Phone": "(206) 555-3412", "PhoneUrl": "tel:(206) 555-3412", "BirthDate": "\/Date(268088400000)\/", "HireDate": "\/Date(1318453200000)\/", "Country": "USA", "Languages": [{ name: "English" }] },
        { "ID": 4, "Name": "Peacock, Margaret", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/4.png", "Phone": "(206) 555-8122", "PhoneUrl": "tel:(206) 555-8122", "BirthDate": "\/Date(377388000000)\/", "HireDate": "\/Date(1171404000000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "Spanish" }] },
        { "ID": 5, "Name": "Buchanan, Steven", "Title": "Sales Manager", "ImageUrl": "../../images/samples/nw/employees/5.png", "Phone": "(71) 555-4848", "PhoneUrl": "tel:(71) 555-4848", "BirthDate": "\/Date(-110084400000)\/", "HireDate": "\/Date(955573200000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "Italian" }] },
        { "ID": 6, "Name": "Suyama, Michael", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/6.png", "Phone": "(71) 555-7773", "PhoneUrl": "tel:(71) 555-7773", "BirthDate": "\/Date(44744400000)\/", "HireDate": "\/Date(1125090000000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "Portuguese" }] },
        { "ID": 7, "Name": "King, Robert", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/7.png", "Phone": "(71) 555-5598", "PhoneUrl": "tel:(71) 555-5598", "BirthDate": "\/Date(-213760800000)\/", "HireDate": "\/Date(907794000000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "French" }, { name: "Spanish" }] },
        { "ID": 8, "Name": "Callahan, Laura", "Title": "Inside Sales Coordinator", "ImageUrl": "../../images/samples/nw/employees/8.png", "Phone": "(206) 555-1189", "PhoneUrl": "tel:(206) 555-1189", "BirthDate": "\/Date(318828800000)\/", "HireDate": "\/Date(962825600000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "Mandarin" }] },
        { "ID": 9, "Name": "Dodsworth, Anne", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/9.png", "Phone": "(71) 555-4444", "PhoneUrl": "tel:(71) 555-4444", "BirthDate": "\/Date(444952800000)\/", "HireDate": "\/Date(1246395600000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "Japanese" }] }
    ]

    $.ig.loader({
        scriptPath: "https://cdn-na.infragistics.com/igniteui/2019.1/latest/js/",
        cssPath: "https://cdn-na.infragistics.com/igniteui/2019.1/latest/css/",
        resources: "igGrid.Updating,igUpload"
    });
    $.ig.loader(function () {
        var currCallbacks;

        function fileUploadedEvt(evt, ui) {
			var button = $("#upload_bb"),
				upload = $("#upload"),
				sMsg = ui.fileInfo.serverMessage;
			if (!sMsg) {
				sMsg = "../images/samples/grid/noimage.png";
				showAlert({errorMessage: 'The file cannot be uploaded.'});
			} else {
				sMsg = 'data:image/png;base64,' + sMsg;
			}
			$("#imgTmp").attr("src", sMsg);
			//callbacks collection
			currCallbacks.textChanged();
			// re-create upload
			setTimeout(function () {
				createUpload();
			}, 10);
		}
		function showAlert(args) {
			$("#error-message").html(args.errorMessage)
				.stop(true, true).fadeIn(500).delay(3000).fadeOut(500);
			setTimeout(function () {
				createUpload();
			}, 10);
		}
		function createUpload() {
			// if upload exists - remove it and re-create new upload
			var $tooltip = $("#tooltip");
			$('#upload').remove();
			$("<div id='upload'></div>").appendTo($tooltip);
			$("#upload").igUpload({
				autostartupload: true,
				maxFileSize: 500000,
				allowedExtensions: ["jpg", "jpeg", "gif", "png"],
				fileSelected: function (e, args) {
					args.owner.element.hide();
				},
				fileUploaded: fileUploadedEvt,
				onError: function (e, args) {
					showAlert(args);
				},
				labelUploadButton: "編集",
				labelAddButton: "編集",
				controlId: "serverID4"
			});
        }
        //creating custom editor provider
        $.ig.EditorProviderUpload = $.ig.EditorProvider.extend({
			createEditor: function (callbacks, key, editorOptions, tabIndex, format, element) {
				this.noImagePath = "../images/samples/grid/noimage.png";
				currCallbacks = callbacks;
				var tmpContainer = $("#templateContainer");
				//appending teh div and the image elemnts
				tmpContainer.parent().append('<div id="container" style="width: 35%;float: right;position:relative; padding-top:5%;"><img id="imgTmp" src="" alt="" title="" width="150px" height="150px"/><div id="tooltip" style="margin-padding:5px; position:absolute; top:65px; left:50px;" ></div></div>');
				tmpContainer.parent().append('<div style="clear:both;"></div><div id="error-message" style="float: right;color: #FF0000; font-weight: bold;"></div>');
				createUpload();
				this.image = $("#imgTmp");
				return element;
			},
			attachErrorEvents: function (errorShowing, errorShown, errorHidden) { },
			getValue: function () {
				return this.image.attr("src") || this.noImagePath;
			},
			setValue: function (val) {
				this.image.attr("src", val);
			},
			destroy: function () {
				var $upload = $("#upload");
				if ($upload.data('igUpload')) {
					$upload.igUpload("destroy");
				}
			}
        });
        $("#grid1").igGrid({
            dataSource: northwindEmployees,
            primaryKey: "ID",
            width: "100%",
            height: "600px",
            autoCommit: true,
            autoGenerateColumns: false,
            columns: [
                { headerText: "社員 ID", key: "ID", dataType: "number", hidden: true },
                { headerText: "画像", key: "ImageUrl", dataType: "object", template: "<img width='100' height='90' src='${ImageUrl}' alt='${Name}' title='${Name}' />" },
                { headerText: "名前", key: "Name", dataType: "string" },
                { headerText: "役職", key: "Title", dataType: "string" },
                { headerText: "電話", key: "Phone", dataType: "string" },
                { headerText: "雇用日", key: "HireDate", dataType: "date" }
            ],
            features: [
                {
                    name: "Updating",
                    enableAddRow: true,
                    enableDeleteRow: false,
                    editMode: "dialog",
                    columnSettings: [
                        {
                            columnKey: "ImageUrl",
                            readOnly: false,
                            editorProvider: new $.ig.EditorProviderUpload()
                        }
                    ],
                    rowEditDialogOptions: {
                        width: "560px",
                        height: "350px",
                        dialogTemplateSelector: "#dialogTemplate",
                        editorsTemplateSelector: "#editorsTemplate",
                        showReadonlyEditors: false,
                        editorsColumnWidth: 50
                    }
                }
            ]
        });
    });
});