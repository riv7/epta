Ext.define('Epta.view.match.MatchAwayPlayerList', {
	extend: 'Ext.List',
	xtype: 'matchawayplayerlist',
	requires: [
		'Epta.store.MatchAwayPlayers'
	],
	
	config: {
		title: 'MatchAwayPlayerList',
	    scrollable: true,
		store: 'MatchAwayPlayers',
	    onItemDisclosure: false,
	    emptyText: 'No data found!',	
	    grouped: true,

	    items: [{
        	docked: 'top',
	        xtype: 'button',
	        action: 'settings',
	        text: 'add'
        }],
        
        itemTpl: '<div class=\"MatchEvent\"><strong> '+
	    			'{player} || '+
	    			'{number}'+
	    			'<strong>'+
	    		  '</div>'
	}
});
