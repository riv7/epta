Ext.define('Epta.view.match.MatchHomePlayerList', {
	extend: 'Ext.List',
	xtype: 'matchhomeplayerlist',
	requires: [
		'Epta.store.MatchHomePlayers'
	],
	
	config: {
		title: 'MatchHomePlayerList',
	    scrollable: true,
		store: 'MatchHomePlayers',
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
