$(function () {            

    $("#firstTree").igTree({
        checkboxMode: 'triState',
        singleBranchExpand: true,
        dataSource: $.extend(true, [], files),
        dataSourceType: 'json',
        initialExpandDepth: 0,
        pathSeparator: '.',
        bindings: {
            textKey: 'Text',
            valueKey: 'Value',
            imageUrlKey: 'ImageUrl',
            childDataProperty: 'Folder'
        },
        dragAndDrop: true,
        dragAndDropSettings: {
            allowDrop: true,
            customDropValidation: function (element) {
                // Validates the drop target
                var valid = true,
					droppableNode = $(this);

                if (droppableNode.is('a') && droppableNode.closest('li[data-role=node]').attr('data-value') === 'File') {
                    valid = false;
                }

                return valid;
            }
        }
    });

    $("#secondTree").igTree({
        checkboxMode: 'triState',
        singleBranchExpand: true,
        dataSource: $.extend(true, [], files),
        dataSourceType: 'json',
        initialExpandDepth: 0,
        pathSeparator: '.',
        bindings: {
            textKey: 'Text',
            valueKey: 'Value',
            imageUrlKey: 'ImageUrl',
            childDataProperty: 'Folder'
        },
        dragAndDrop: true,
        dragAndDropSettings: {
            allowDrop: true,
            customDropValidation: function (element) {
                // Validates the drop target
                var valid = true,
					droppableNode = $(this);

                if (droppableNode.is('a') && droppableNode.closest('li[data-role=node]').attr('data-value') === 'File') {
                    valid = false;
                }

                return valid;
            }
        }
    });

});