Ext.define('Epta.view.match.MatchProgressList', {
	extend: 'Ext.List',
	xtype: 'matchprogresslist',
	requires: [
		'Epta.store.MatchEvents'
	],
	
	config: {
		title: 'MatchProgressList',
	    scrollable: true,
		store: 'MatchEvents',
	    onItemDisclosure: false,
	    emptyText: 'No data found!',
	    
	    itemTpl: '<div class=\"MatchProgress\"><strong> '+
	    			'{minute} || '+
	    			'{type} || '+
	    			'{team} || '+
	    			'{player} || '+
	    			'{message}'+
	    			'<strong>'+
	    		  '</div>'
			    	    
//	    itemTpl: 
//    	['<div class="MatchEvent">',
//    	 '<table id="myTable">',
//	      '<tr>',
//	      	'<td class="first-child">{minute}</td>',
//	        '<td>{type}</td>',
//	        '<td>{team}</td>',
//	        '<td>{player}</td>',
//	        '<td class="last-child">{message}</td>',	        
//	      '</tr>',
//	    '</table>']      	    	

	}
});
