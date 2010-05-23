Ext.onReady(function() {
    var buttonClicked = function() {
        Ext.Ajax.defaultHeaders = {
            'Accept': 'application/json'
        };
        var resp = Ext.Ajax.request({
            url: '/api/categories',
            method: 'GET',
            success: function(resp) {
                var item = Ext.decode(resp.responseText);
                var itemName = item.data[0].name;
                var myDiv = Ext.get('myDiv');
                myDiv.update('The first category is: ' + itemName + '<br />');
            },
            failure: function() {
                Ext.Msg.alert('Failed');
            },
        });

    }
    Ext.get('myButton').on('click', buttonClicked);
});


