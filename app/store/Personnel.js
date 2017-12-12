Ext.define('NewApp.store.Personnel', {
    extend: 'Ext.data.Store',
    storeId: 'personnel',
    alias: 'store.personnel',

    fields: [
        ['name', 'email', 'phone',],



    ],

    data: {
        items: [
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
            { name: 'Worf', email: "worf.moghsson@enterprise.com", phone: "555-222-2222" },
            { name: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333" },
            { name: 'Data', email: "mr.data@enterprise.com", phone: "555-444-4444" },
            
        ]
    },

    



    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

});

Ext.define('NewApp.store.Personnel2', {
    extend: 'Ext.data.Store',
    storeId: 'personnel2',
    alias: 'store.personnel2',

    fields: [
        ['name', 'email', 'phone',],



    ],

    data: {
        items: [
            { name: 'odai', email: "odai@enterprise.com", phone: "555-111-1111" },
            { name: 'safwan', email: "safwan@enterprise.com", phone: "555-222-2222" },
            { name: 'rahaf', email: "rahaf@enterprise.com", phone: "555-333-3333" },
            { name: 'raedah', email: "raedah@enterprise.com", phone: "555-444-4444" },
            
        ]
    },

    



    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

});













