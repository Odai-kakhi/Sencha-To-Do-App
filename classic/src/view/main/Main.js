/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */



Ext.define('NewApp.view.main.Main', {

    stores: '[Personnel]',

    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'NewApp.view.main.MainController',
        'NewApp.view.main.MainModel',
        'NewApp.view.main.List',



    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },

        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        },

    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        items: [
            {
                xtype: 'mainlist1'

            },
            {
                xtype: 'mainlist'

            },
            {
                xtype: 'button',
                text: 'Multi',
                style: {
                    margin: '10px',
                    width: '340px'
                },
                handler: function () {
                    Ext.getBody().mask("The mask with this message should be visible in the foreground.");
                    setTimeout(function () { Ext.getBody().unmask(); }, 2000)

                    var gridNumber = Ext.getCmp('mainGridId').getStore().config.data.items
                    var grid = Ext.getCmp('mainGridId')
                    var store = grid.getStore()
                    for (var i = 0; i < gridNumber.length; i++) {
                        store.add({
                            name: gridNumber[i].name,
                            email: gridNumber[i].email,
                            phone: gridNumber[i].phone
                        });
                        setTimeout(function () { Ext.Msg.alert('Confirm', 'DONE!!'); }, 3500);

                    }




                }
            },
            {
                xtype: 'button',
                text: 'siwtch',
                style: {
                    margin: '10px',
                    width: '340px'
                },
                handler: function () {
                    var gridNumber = Ext.getCmp('mainGridId').getStore().config.data.items
                    var gridNumber2 = Ext.getCmp('mainGridId2').getStore().config.data.items
                    var grid = Ext.getCmp('mainGridId')
                    var grid2 = Ext.getCmp('mainGridId2')
                    var store2 = grid2.getStore()
                    var store = grid.getStore()
                    var fields = store.model.prototype.fields
                    console.log(gridNumber)
                    console.log(gridNumber2)
                    store2.removeAll();

                    for (var i = 0; i < gridNumber.length; i++) {


                        store2.add({
                            name: gridNumber[i].name,
                            email: gridNumber[i].email,
                            phone: gridNumber[i].phone
                        });

                    }

                    store.removeAll();
                    for (var x = 0; x < gridNumber2.length; x++) {
                        store.add({
                            name: gridNumber2[x].name,
                            email: gridNumber2[x].email,
                            phone: gridNumber2[x].phone
                        });
                    }
                    console.log(gridNumber)
                    console.log(gridNumber2)




                }





            },
            {
                xtype: 'button',
                text: 'Dlete',
                style: {
                    margin: '10px',
                    width: '340px'
                },
                handler: function () {
                    var mainGrid = Ext.getCmp('mainGridId')
                    var gridNumber = Ext.getCmp('mainGridId').getStore().count()
                    console.log(gridNumber - 1)
                    mainGrid.getStore().removeAt(gridNumber - 1)

                }
            },
            {
                xtype: 'button',
                text: 'Add',
                style: {
                    margin: '10px',
                    width: '340px'
                },

                listeners: {
                    click: {
                        element: 'el',
                        fn: function () {
                            console.log('click el')
                            Ext.create('Ext.window.Window', {
                                title: 'ADD',
                                height: 250,
                                width: 500,
                                layout: 'fit',
                                name: 'window',


                                items: [
                                    {
                                        xtype: 'form',
                                        bodyPadding: 20,
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                name: 'firstname',
                                                fieldLabel: 'first name',
                                                id: 'firstname'
                                            },
                                            {
                                                xtype: 'textfield',
                                                name: 'Email',
                                                fieldLabel: 'Email',
                                                id: 'email'
                                            },
                                            {
                                                xtype: 'textfield',
                                                name: 'phone number',
                                                fieldLabel: 'phone number',
                                                id: 'phonenumber',

                                            },
                                            {
                                                xtype: 'container',
                                                layout: {
                                                    type: 'hbox',
                                                    align: 'middle',
                                                    pack: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        iconCls: "add-button",
                                                        flex: 1,
                                                        formBind: true,
                                                        itemId: 'add',
                                                        text: 'ADD',
                                                        style: {
                                                            margin: '10px'
                                                        }, handler: function () {
                                                            var val = Ext.getCmp('firstname').getValue();
                                                            var val1 = Ext.getCmp('email').getValue();
                                                            var val2 = Ext.getCmp('phonenumber').getValue();
                                                            var grid = Ext.getCmp('mainGridId')
                                                            var store = grid.getStore()
                                                            console.log(store)
                                                            var fields = store.model.prototype.fields
                                                            console.log(fields)



                                                            store.add({
                                                                name: val,
                                                                email: val1,
                                                                phone: val2
                                                            });
                                                            this.up('.window').close()



                                                        },


                                                    }

                                                ]
                                            }
                                        ]
                                    }
                                ]


                            }).show();

                        }

                    }
                }

            }]
    },
    {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    },
    {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    },
    {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        },
    },
    {
        title: 'Settings2',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        },
    }
    ]
});





