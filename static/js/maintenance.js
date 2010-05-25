var App = new Ext.App({});

var writer = new Ext.data.JsonWriter({
  encode: false, // <-- dont' return encoded JSON; causes Ext.Ajax#request to send data using JsonData config rather than HTTP pararms
  returnJson: true,
  writeAllFields: true
});

Ext.onReady(function() {
  Ext.QuickTips.init();


});
  

