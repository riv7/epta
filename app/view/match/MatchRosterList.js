Ext.define('Epta.view.match.MatchRosterList', {
	extend: 'Ext.List',
	xtype: 'matchrosterlist',
	requires: [
		'Epta.store.MatchEvents'
	],
	
	config: {
		title: 'MatchRosterList',
	    styleHtmlContent: true,
	    scrollable: true,
		store: 'MatchEvents',
	    onItemDisclosure: false,
	    emptyText: 'No data found!',
			    	    
	    itemTpl: 
    	['<div class="MatchEvent">',
    	 '<table id="myTable">',
	      '<tr>',
	      	'<td class="first-child">{minute}</td>',
	        '<td>{type}</td>',
	        '<td>{team}</td>',
	        '<td>{player}</td>',
	        '<td class="last-child">{message}</td>',	        
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