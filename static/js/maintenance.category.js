var App = new Ext.App({});

var proxy_category = new Ext.data.HttpProxy({
  url: '/api/categories'
});

var reader_category = new Ext.data.JsonReader(
  {
    totalProperty: 'total',
    successProperty: 'success',
    messageProperty: 'message',
    idProperty: 'id',
    root: 'data'
  }, 
  [
    {name: 'id'},
    {name: 'name', allowBlank: false},
  ]
);

var store_category = new Ext.data.Store({
  id: 'category',
  restful: true,
  proxy: proxy_category,
  reader: reader_category,
  writer: writer,
  listeners: {
    write: function(store_category, action, result, response, rs) {
      App.setAlert(response.success, response.message);
    }
  }
});
store_category.load();


var user_cols_category = [
  { 
    header: "Name", width: 120, sortable: true, dataIndex: 'name', 
    editor: new Ext.form.TextField({})
  },
];

var editor_category = new Ext.ux.grid.RowEditor({
  saveText: 'Update'
});

// GridPanel + RowEditor
function onAdd_category(btn, ev) {
  var u = new userGrid.store.recordType({
    name: 'CategoryName'
  });
  editor.stopEditing();
  userGrid.store.insert(0, u);
  editor.startEditing(0);
}

function onDelete_category() {
  var rec = userGrid.getSelectionModel().getSelected();
  if (!rec) { return false; }
  userGrid.store.remove(rec);
}

Ext.onReady(function() {

  var grid_category = new Ext.grid.GridPanel({
    renderTo: 'grid-category',
    iconCls: 'icon-grid',
    frame: true,
    title: 'Categories',
    autoScroll: true,
    height: 300,
    store: store_category,
    plugins: [editor_category],
    columns: user_cols_category,
    tbar: [
      {
        text: 'Add',
        iconCls: 'silk-add',
        handler: onAdd_category
      }, 
      '-',
      {
        text: 'Delete',
        iconCls: 'silk-delete',
        handler: onDelete_category
      }
    ],
    viewConfig: { forceFit: true },
  });

});
