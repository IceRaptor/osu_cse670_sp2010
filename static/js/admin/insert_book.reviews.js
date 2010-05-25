var App = new Ext.App({});

var proxy_review = new Ext.data.HttpProxy({
  url: '/api/reviews'
});

var reader_review = new Ext.data.JsonReader(
  {
    totalProperty: 'total',
    successProperty: 'success',
    messageProperty: 'message',
    idProperty: 'id',
    root: 'data'
  }, 
  [
    {name: 'id'},
    {name: 'text', allowBlank: false},
  ]
);

var writer = new Ext.data.JsonWriter({
  encode: false, // <-- dont' return encoded JSON; causes Ext.Ajax#request to send data using JsonData config     rather than HTTP pararms
  returnJson: true,
  writeAllFields: true
});

var user_cols_review = [
  { 
    header: "Review", width: 64, sortable: true, dataIndex: 'text', 
      editor: new Ext.form.TextField({})
  },
];

var store_review = new Ext.data.Store({
  id: 'review',
  restful: true,
  proxy: proxy_review,
  reader: reader_review,
  writer: writer,
  listeners: {
  }
});
store_review.load();

var editor_review = new Ext.ux.grid.RowEditor({
  saveText: 'Update'
});

