var App = new Ext.App({});

Ext.onReady(function() {
  Ext.QuickTips.init();

  buttonP = new Ext.Panel({
    width: 300,
    title: 'ADMIN TASKS - 3-B.com',
    renderTo: document.body,
    border: false,
    shadow: false,
    items: [{
      columns: 1,
      border: false,
      shadow: false,
      xtype: 'buttongroup',
      columns: 1,
      items: [
        {
          text: 'Manage Bookstore Catalog',
          width: 260,
          
        },
        {
          text: 'Place Orders',
        },
        {
          text: 'Generate Reports',
        },
        {
          text: 'Update Admin Profile',
        },
        {
          text: 'System Maintenance',
        },
        {
          text: 'Exit 3-B.com [Admin]',
        },

      ],
    }],

  }); 

});
  

