Ext.application({
    name: 'NewApp',
    stores: 'Personnel',
    extend: 'NewApp.Application',

    requires: [
        'NewApp.view.main.Main'
    ],

    mainView: 'NewApp.view.main.Main',

   
});

