/*
 * File: app.js
 * Date: Fri Mar 23 2012 14:43:03 GMT-0600 (Mountain Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'GUI',
    appFolder: 'gui/index',

    controllers: [
        'homepage',
        'Login'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {

            layout: {
                type: 'border',
                padding: 5
            },
            defaults: {
                split: true
            },
            items: [
                {
                    region: 'north',
                    title: 'Calgary Emergency Medicine',
                    border: false
                },
                {
                    xtype: 'homepage',
                    region: 'center',
                    border: false
                },
		{
		    
		    region: 'east',
		    border: false,
		    items: [{
		      xtype: 'loginform',
		      region: 'north'
		    }]/*
		    dockedItems: [{
		      xtype: 'toolbar',
		      dock: 'top',
		      items: ["Login Form"]
		    }]*/
		}
            ]
        });
    }
});