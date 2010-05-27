var App = new Ext.App({});

var user_cols_author = [
  { 
    header: "First Name", width: 128, sortable: true, dataIndex: 'fname', 
      editor: new Ext.form.TextField({})
  },
  {
    header: "Last Name", width: 128, sortable: true, dataIndex: 'lname', 
      editor: new Ext.form.TextField({})
  },
];

var record_author = Ext.data.Record.create([
  { name: 'fname', mapping: 'fname' },
  { name: 'lname', mapping: 'lname' }
]);
var store_author = new Ext.data.ArrayStore({
  fields: record_author,
  idIndex: 0
});
var data_author = [ ];
store_author.loadData(data_author);

var editor_author = new Ext.ux.grid.RowEditor({
  saveText: 'Update'
});
