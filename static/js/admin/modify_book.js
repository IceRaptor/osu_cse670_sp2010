var App = new Ext.App({});

var store_searchin = new Ext.data.ArrayStore({
  fields: [{ name: 'text' }]
});
var data_searchin = [
  [ 'Keyword anywhere' ],
  [ 'Title' ],
  [ 'Author' ],
  [ 'Publisher' ],
  [ 'ISBN' ],
];
store_searchin.loadData(data_searchin);


Ext.onReady(function() {
  Ext.QuickTips.init();

  var combo_category = new Ext.form.ComboBox({
    id: 'combo_cat',
    store: store_category,
    fieldLabel: 'Category',
    displayField: 'name',
    typeAhead: true,
    mode: 'local',
    forceSelection: true,
    triggerAction: 'all',
    emptyText: 'Select a category...',
    selectOnFocus: true,
  });  

  var searchFor = new Ext.form.TextField({
    anchor: '95%',
    fieldLabel: 'Search for:',
    name: 'searchfor',
    value: '',
  });

  var combo_searchIn = new Ext.form.ComboBox({
    id: 'combo_searchin',
    store: store_searchin,
    fieldLabel: 'Search In',
    displayField: 'text',
    typeAhead: true,
    mode: 'local',
    forceSelection: true,
    triggerAction: 'all',
    emptyText: 'Select an attribute...',
    selectOnFocus: true,
  });

  var manageWin = new Ext.Window({
    applyTo: 'search-win-div',
    layout: 'fit',
    closeAction: 'hide',
    height: 500,
    plain: true,
    hidden: false,
    resizeable: false,
    items: new Ext.Panel({
      title: 'Modify / Delete Books [Search]',
      columns: 1,
      width: 600,
      defaults: { width: 300 },
      items: [
        searchFor,
        combo_searchIn,
        combo_category,
      ]
      
    }),

  });

  var bookUpdateHandler = function(b,e) {
  }
  var bookDeleteHandler = function(b,e) {
  }

  var grid_select = new Ext.grid.GridPanel({
    id: 'grid_select',
    iconCls: 'icon-grid',
    frame: true,
    title: 'Books',
    height: 300,
    autoScroll: true,
    //store: store_book,
    //columns: book_cols,
    tbar: [
      {
        text: 'Update',
        iconCls: 'silk-add',
        handler: bookUpdateHandler,
      },
      {
        text: 'Delete',
        iconCls: 'silk-delete',
        handler: bookDeleteHandler,
      } 
    ],
    viewConfig: { forceFit: true },
  });


});
  

