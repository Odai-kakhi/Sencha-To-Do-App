/**
 * This view is an example list of people.
 */
Ext.define('NewApp.view.main.List', {
    store: Ext.data.StoreManager.lookup('personnel'),
    extend: 'Ext.grid.Panel',
    items: [{
        xtype: 'mainlist',
    },
    {
        xtype : 'mainlist',
    }],
    // xtype: 'mainlist',
    id: 'mainGridId',

    requires: [
        'NewApp.store.Personnel',


    ],

    title: 'Personnel',

    store: {
        type: 'personnel',
    },

    columns: [
        { text: 'Name', dataIndex: 'name', editor: 'textfield' },
        { text: 'Email', dataIndex: 'email', flex: 1, },
        { text: 'Phone', dataIndex: 'phone', editor: { xtype: 'textfield', allowBlank: false } },

    ],


    selModel: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 1,

    },




    renderTo: Ext.getBody()



});









