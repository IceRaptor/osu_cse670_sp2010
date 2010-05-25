var App = new Ext.App({});

var proxy_author = new Ext.data.HttpProxy({
  url: '/api/authors'
});

var reader_author = new Ext.data.JsonReader(
  {
    totalProperty: 'total',
    successProperty: 'success',
    messageProperty: 'message',
    idProperty: 'id',
    root: 'data'
  }, 
  [
    {name: 'id'},
    {name: 'fname', allowBlank: false},
    {name: 'lname', allowBlank: false},
  ]
);

var writer = new Ext.data.JsonWriter({
  encode: false,
  returnJson: true,
  writeAllFields: true
});

var user_cols_author = [
  { 
    header: "First Name", width: 64, sortable: true, dataIndex: 'fname', 
      editor: new Ext.form.TextField({})
  },
  {
    header: "Last Name", width: 64, sortable: true, dataIndex: 'lname', 
      editor: new Ext.form.TextField({})
  },
];

var store_author = new Ext.data.Store({
  id: 'user',
  restful: true,
  proxy: proxy_author,
  reader: reader_author,
  writer: writer,
  listeners: {
  }
});
store_author.load();

var editor_author = new Ext.ux.grid.RowEditor({
  saveText: 'Update'
});

Ext.onReady(function() {
var grid_author = new Ext.grid.GridPanel({
  renderTo: 'grid-state',
  iconCls: 'icon-grid',
  frame: true,
  title: 'States',
  autoScroll: true,
  height: 300,
  store: store_author,
  plugins: [editor_author],
  columns: user_cols_author,
  tbar: [
    {
      text: 'Add',
      iconCls: 'silk-add',
      handler: onAdd_author
    }, 
    '-',
    {
      text: 'Delete',
      iconCls: 'silk-delete',
      handler: onDelete_author
    }
  ],
  viewConfig: { forceFit: true },
});

// GridPanel + RowEditor
function onAdd_author(btn, ev) {
  var u = new grid_author.store.recordType({
    name: 'StateName',
    abbr: 'ZZ',
  });
  editor_author.stopEditing();
  grid_author.store.insert(0, u);
  editor_author.startEditing(0);
}

function onDelete_author() {
  var rec = grid_author.getSelectionModel().getSelected();
  if (!rec) { return false; }
  grid_author.store.remove(rec);
}

});
