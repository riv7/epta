Ext.define('Epta.view.match.MatchHomePlayerList', {
	extend: 'Ext.List',
	xtype: 'matchhomeplayerlist',
	requires: [
		'Epta.store.MatchHomePlayers'
	],
	
	config: {
		title: 'MatchHomePlayerList',
	    styleHtmlContent: true,
	    scrollable: true,
		store: 'MatchHomePlayers',
	    onItemDisclosure: false,
	    emptyText: 'No data found!',
			    	    
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
