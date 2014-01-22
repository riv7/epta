Ext.define('Epta.view.match.MatchProgressView', {
	extend: 'Ext.List',
	xtype: 'matchprogressview',
	requires: [
		'Epta.store.MatchEvents'
	],
	
	config: {
		title: 'MatchProgressView',
	    styleHtmlContent: true,
	    scrollable: true,
		store: 'MatchEvents',
	    onItemDisclosure: false,
	    emptyText: 'No data found!',
	    	
	    itemTpl: '<div class="MatchEvent"><strong>{type}</strong> <strong>{team}</strong> <strong>{player}</strong> <strong>{message}</strong></div>'
	}
});
