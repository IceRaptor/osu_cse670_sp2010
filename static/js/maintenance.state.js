var App = new Ext.App({});

var proxy_state = new Ext.data.HttpProxy({
  url: '/api/states'
});

var reader_state = new Ext.data.JsonReader(
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
    {name: 'abbr', allowBlank: false},
  ]
);

var user_cols_state = [
  { 
    header: "Abbreviation", width: 12, sortable: true, dataIndex: 'abbr', 
      editor: new Ext.form.TextField({})
  },
  {
    header: "Name", width: 120, sortable: true, dataIndex: 'name', 
      editor: new Ext.form.TextField({})
  },
];

var store_state = new Ext.data.Store({
  id: 'user',
  restful: true,
  proxy: proxy_state,
  reader: reader_state,
  writer: writer,
  listeners: {
    write: function(store_state, action, result, response, rs) {
      App.setAlert(response.success, response.message);
    }
  }
});
store_state.load();


var editor_state = new Ext.ux.grid.RowEditor({
  saveText: 'Update'
});

Ext.onReady(function() {
var grid_state = new Ext.grid.GridPanel({
  renderTo: 'grid-state',
  iconCls: 'icon-grid',
  frame: true,
  title: 'States',
  autoScroll: true,
  height: 300,
  store: store_state,
  plugins: [editor_state],
  columns: user_cols_state,
  tbar: [
    {
      text: 'Add',
      iconCls: 'silk-add',
      handler: onAdd_state
    }, 
    '-',
    {
      text: 'Delete',
      iconCls: 'silk-delete',
      handler: onDelete_state
    }
  ],
  viewConfig: { forceFit: true },
});

// GridPanel + RowEditor
function onAdd_state(btn, ev) {
  var u = new grid_state.store.recordType({
    name: 'StateName',
    abbr: 'ZZ',
  });
  editor_state.stopEditing();
  grid_state.store.insert(0, u);
  editor_state.startEditing(0);
}

function onDelete_state() {
  var rec = grid_state.getSelectionModel().getSelected();
  if (!rec) { return false; }
  grid_state.store.remove(rec);
}

});
