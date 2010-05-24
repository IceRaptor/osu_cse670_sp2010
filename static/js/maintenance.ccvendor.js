var App = new Ext.App({});

var proxy_ccvendor = new Ext.data.HttpProxy({
  url: '/api/ccvendors'
});

var reader_ccvendor = new Ext.data.JsonReader(
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

var store_ccvendor = new Ext.data.Store({
  id: 'user',
  restful: true,
  proxy: proxy_ccvendor,
  reader: reader_ccvendor,
  writer: writer,
  listeners: {
    write: function(store_ccvendor, action, result, response, rs) {
      App.setAlert(response.success, response.message);
    }
  }
});
store_ccvendor.load();

var user_cols_ccvendor = [
  { 
    header: "Name", width: 120, sortable: true, dataIndex: 'name', 
    editor: new Ext.form.TextField({})
  },
];

var editor_ccvendor = new Ext.ux.grid.RowEditor({
  saveText: 'Update'
});

Ext.onReady(function() {

var grid_ccvendor = new Ext.grid.GridPanel({
  renderTo: 'grid-ccvendor',
  iconCls: 'icon-grid',
  frame: true,
  title: 'Credit Card Vendors',
  autoScroll: true,
  height: 300,
  store: store_ccvendor,
  plugins: [editor_ccvendor],
  columns: user_cols_ccvendor,
  tbar: [
    {
      text: 'Add',
      iconCls: 'silk-add',
      handler: onAdd_ccvendor
    }, 
    '-',
    {
      text: 'Delete',
      iconCls: 'silk-delete',
      handler: onDelete_ccvendor
    }
  ],
  viewConfig: { forceFit: true },
});

// GridPanel + RowEditor
function onAdd_ccvendor(btn, ev) {
  var u = new grid_ccvendor.store.recordType({
    name: 'VendorName'
  });
  editor_ccvendor.stopEditing();
  grid_ccvendor.store.insert(0, u);
  editor_ccvendor.startEditing(0);
}

function onDelete_ccvendor() {
  var rec = grid_ccvendor.getSelectionModel().getSelected();
  if (!rec) { return false; }
  grid_ccvendor.store.remove(rec);
}

});
