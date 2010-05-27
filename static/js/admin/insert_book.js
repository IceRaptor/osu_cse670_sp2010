var App = new Ext.App({});

var writer = new Ext.data.JsonWriter({
  encode: false, // <-- dont' return encoded JSON; causes Ext.Ajax#request to send data using JsonData config rather than HTTP pararms
  returnJson: true,
  writeAllFields: true
});


var writer = new Ext.data.JsonWriter({
  encode: false, 
   // <-- dont' return encoded JSON; causes Ext.Ajax#request to send data using 
   //  JsonData config     rather than HTTP pararms
  returnJson: true,
  writeAllFields: true
});


Ext.onReady(function() {
  Ext.QuickTips.init();
  
  // turn on validation errors beside the field globally
  Ext.form.Field.prototype.msgTarget = 'side';

 // Category Combobox 
  var combo_category = new Ext.form.ComboBox({
    store: store_category,
    fieldLabel: 'Category',
    displayField:'name',
    typeAhead: true,
    mode: 'local',
    forceSelection: true,
    triggerAction: 'all',
    emptyText:'Select a category...',
    selectOnFocus:true
  });

  // Author Combobox
  var addAuthorHandler = function() {
    var auth = [ 'First Name', 'Last Name' ];
//    var auth = { 'fname': 'First Name', 'lname' : 'Last Name' };
    editor_author.stopEditing();
    store_author.insert(0, auth);
    grid_author.getView().refresh();
    grid_author.getSelectionModel().selectRow(0);
    editor_author.startEditing(0);
  }
  var deleteAuthorHandler = function() {
    editor_author.stopEditing();
    var s = grid_author.getSelectionModel().getSelections();
    for (var i = 0, r; r = s[i]; i++) {
      store.remove(r)
    }
  }

  var grid_author = new Ext.grid.GridPanel({
    store: store_author,
    columns: user_cols_author,
    iconCls: 'icon-grid',
    frame: true,
    title: 'Authors',
    autoScroll: true,
    height: 200,
    stripeRows: true,
    stateful: true,
    stateId: 'grid',
    plugins: [editor_author],
    tbar: [
      {
        text: 'Add',
        iconCls: 'silk-add',
        handler: addAuthorHandler
      },
      '-',
      {
        text: 'Delete',
        iconCls: 'silk-delete',
        handler: deleteAuthorHandler
      }
    ],
  });

  // Review Combobox
  var grid_review = new Ext.grid.GridPanel({
    iconCls: 'icon-grid',
    frame: true,
    title: 'Reviews',
    autoScroll: true,
    height: 300,
    store: store_review,
    plugins: [editor_review],
    columns: user_cols_review,
    tbar: [
      {
        text: 'Add',
        iconCls: 'silk-add',
      },
      '-',
      {
        text: 'Delete',
        iconCls: 'silk-delete',
      }
    ],
    viewConfig: { forceFit: true },
  });

  // Button handlers
  var insertSuccess = function() {
    alert("Successfully inserted book.")
  };

  var insertHandler = function(b, ev) {
    simple.form.submit({
      waitMsg: 'Saving data...',
      success: insertSuccess
    });    
  };

  var cancelHandler = function(b, ev) {

  };

  var simple = new Ext.FormPanel({
        labelAlign: 'left',
        url:'insert_book',
        frame:true,
        title: 'Insert New Book',
        bodyStyle:'padding:5px 5px 0',
        width: 600,

        items: [
          new Ext.form.NumberField({
            fieldLabel: 'ISBN',
            name: 'isbn',
            allowBlank:false,
            allowDecimal:false,
            allowNegative:false,
            minLength: 10,
            maxLength: 13,
            value: '9999999999999'
          }),
          {
            xtype:'textfield',
            anchor: '95%',
            fieldLabel: 'Title',
            name: 'title',
            value: 'Testing Title'
          },
          combo_category,
          {
            layout: 'column',
            items: [
              {
                columnWidth: .6,
                layout: 'form',
                items: [
                  {
                    xtype:'textfield',
                    anchor: '95%',
                    fieldLabel: 'Publisher',
                    name: 'publisher',
                    value: 'Testing Publisher'
                  }, 
                  {
                    xtype:'textfield',
                    anchor: '95%',
                    fieldLabel: 'Price',
                    name: 'price',
                    value: '4.95'
                  }, 
                ]
              },
              {
                columnWidth: .4,
                labelWidth: 120,
                layout: 'form',
                items: [
                  new Ext.form.NumberField({
                    fieldLabel: 'Year Published',
                    name: 'pub_year',
                    allowBlank:false,
                    allowDecimal:false,
                    allowNegative:false,
                    minLength: 4,
                    maxLength: 4,
                    minValue: 0,
                    maxValue: 2010,
                    value: '2010',
                    anchor: '95%'
                  }),
                  new Ext.form.NumberField({
                    fieldLabel: 'Min. In-Stock Quantity',
                    name: 'min_qty',
                    allowBlank:false,
                    allowDecimal:false,
                    allowNegative:false,
                    minValue: 0,
                    maxLength: 6,
                    value: '1',
                    anchor: '95%'
                  }),
                ]
              },
            ]
          },
          grid_author,
          grid_review,
        ],
        buttons: [
          { text: 'Insert', handler: insertHandler },
          { text: 'Cancel', handler: cancelHandler }
        ]
    });

  simple.render(document.body);


});
  

