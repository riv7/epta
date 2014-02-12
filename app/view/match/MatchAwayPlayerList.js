Ext.define('Epta.view.match.MatchAwayPlayerList', {
	extend: 'Ext.List',
	xtype: 'matchawayplayerlist',
	requires: [
		'Epta.store.MatchAwayPlayers'
	],
	
	config: {
		title: 'MatchAwayPlayerList',
	    styleHtmlContent: true,
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

			    	    
	    itemTpl: 
    	['<div>',
    	 '<table id="myTable">',
	      '<tr>',
	      	'<td>{number}</td>',
	        '<td>{player}</td>',
	        '<td>{position}</td>',
//	        '<td>{team}</td>',
//	        '<td>{player}</td>',
//	        '<td class="last-child">{message}</td>',	        
	      '</tr>',
	    '</table>']      
	    	
//	    itemTpl: '<div class="MatchEvent"> '+
//	    			'{minute}<span class="verticalLine" />'+
//	    			'{type}<span class="verticalLine" />'+
//	    			'{team}<span class="verticalLine" /> '+
//	    			'{player}<span class="verticalLine" /> '+
//	    			'{message}<span class="verticalLine" /> '+
//	    			'</div>'
	}
});
