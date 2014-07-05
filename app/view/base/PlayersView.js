Ext.define('Epta.view.base.PlayersView', {
    extend: 'Ext.List',
    xtype: 'playersview',
	requires: [
		'Epta.store.Players'
	],

    config: {
    	title: 'PlayersView',
	    iconCls: 'home',	
	    scrollable: true,
		store: 'Players',
        onItemDisclosure: false,
        emptyText: 'No data found!',
	    grouped: true,
		indexBar: true,	        

        items: [{
        	docked: 'top',
	        xtype: 'titlebar',
	        title: 'Spieler',
			items: [
		        {
		           iconCls: 'settings',
	               action: 'settings',
	               ui: 'plain',
	               cls: 'card',
	               html: "new player",
	               align: 'right',
	               text: 'new player'
			     }
	        ]
        }],
        itemTpl: '<div class="Player"><strong>{name} | {position} | {team}</strong></div>'
	}

});
