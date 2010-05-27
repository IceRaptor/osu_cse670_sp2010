var App = new Ext.App({});

var proxy_book = new Ext.data.HttpProxy({
  url: '/api/books'
});

var reader_book = new Ext.data.JsonReader(
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

var store_book = new Ext.data.Store({
  id: 'book',
  restful: true,
  proxy: proxy_book,
  reader: reader_book,
  writer: writer,
});
store_book.load();

