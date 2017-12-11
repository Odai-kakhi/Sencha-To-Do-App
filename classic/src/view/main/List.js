/**
 * This view is an example list of people.
 */
Ext.define('NewApp.view.main.List', {
    style :{
        margin : '20px'
    },
    
    extend: 'Ext.grid.Panel',

    xtype: 'mainlist1',
    id: 'mainGridId',

    requires: [
        'NewApp.store.Personnel',


    ],

    title: 'Personnel-Top',

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



Ext.define('NewApp.view.main.List2', {
    style :{
        margin : '20px'
    },
    extend: 'Ext.grid.Panel',
    
    xtype: 'mainlist',
    id: 'mainGridId2',

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







