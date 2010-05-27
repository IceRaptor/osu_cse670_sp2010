var App = new Ext.App({});

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

var data_author = [];
var store_author = new Ext.data.ArrayStore({
  fields: [ 
    { name: 'fname', type: 'string' },
    { name: 'lname', type: 'string' },
  ],
  idIndex: 0
});
store_author.loadData(data_author);

var editor_author = new Ext.ux.grid.RowEditor({
  saveText: 'Update'
});
