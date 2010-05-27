var App = new Ext.App({});

var user_cols_review = [
  { 
    header: "Review Text", width: 256, sortable: true, dataIndex: 'text', 
      editor: new Ext.form.TextField({})
  }
];

var record_review = Ext.data.Record.create([
  { name: 'text', mapping: 'text' },
]);
var store_review = new Ext.data.ArrayStore({
  id: "store-review",
  fields: record_review,
  idIndex: 0
});
var data_review = [ ];
store_review.loadData(data_review);

var editor_review = new Ext.ux.grid.RowEditor({
  saveText: 'Update'
});
