Ext.onReady(function() {
  Ext.QuickTips.init();

  var manageWin = new Ext.Window({
    applyTo: 'manage_window',
    layout: 'fit',
    closeAction: 'hide',
    height: 100,
    plain: true,
    hidden: true,
    items: new Ext.ButtonGroup({
      title: 'Manage Bookstore Catalog',
      columns: 1,
      width: 500,
      defaults: { width: 300 },
      items: [
        {
          text: 'Insert New Book',
          handler: function(b,v) {
            window.location="/books/admin/insert_book";
          }
        },
        {
          text: 'Modify / Delete Book ',
          handler: function(b,v) {
            window.location="/books/admin/modify_book";
          }
        },
      ]
      
    }),

  });

  var buttonP = new Ext.ButtonGroup({
    id: 'button-panel',
    renderTo: 'button_panel',
    title: 'Admin Tasks- 3-B.com',
    width: 500,
    columns: 1,
    padding: 4,
    defaults: { width: 300 },
    items: [
      {
        text: 'Manage Bookstore Catalog',
        handler: function(b,v){
          //window.location="/books/admin/manage_catalog";
          manageWin.setVisible(true);
        }
      },
      {
        text: 'Place Orders',
        handler: function(b,v){
          window.location="/books/admin/place_orders";
        }
      },
      {
        text: 'Generate Reports',
        handler: function(b,v){
          window.location="/books/admin/generate_reports";
        }
      },
      {
        text: 'Update Admin Profile',
        handler: function(b,v){
          window.location="/books/admin/update_admin";
        }
      },
      {
        text: 'System Maintenance',
        handler: function(b,v){
          window.location="/books/admin/maintenance";
        }
      },
      {
        text: 'Exit 3-B.com [Admin]',
        handler: function(b,v){
          window.location="/books/";
        }
      },

    ],

  }); 

});
  

