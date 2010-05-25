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

var writer = new Ext.data.JsonWriter({
  encode: false, 
  // <-- dont' return encoded JSON; causes Ext.Ajax#request to send data using 
  //  JsonData config     rather than HTTP pararms
  returnJson: true,
  writeAllFields: true
});

var store_category = new Ext.data.Store({
  id: 'category',
  restful: true,
  proxy: proxy_category,
  reader: reader_category,
  writer: writer,
});
store_category.load();

