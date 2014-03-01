Ext.define('Epta.view.match.ChatList', {
	extend: 'Ext.List',
	xtype: 'chatlist',
	requires: [
		'Epta.store.ChatMessages'
	],
	
	config: {
		title: 'ChatList',
	    styleHtmlContent: true,
	    scrollable: true,
		store: 'ChatMessages',
	    onItemDisclosure: false,
	    emptyText: 'No data found!',
			    	    
	    itemTpl: 
    	['<div class="ChatMessage">',
    	 '<table id="myTable">',
	      '<tr>',
	      	'<td class="first-child">{time}</td>',
	        '<td>{icon}</td>',
	        '<td>{user}</td>',
	        '<td>{message}</td>',	          
	      '</tr>',
	    '</table>']      
	}
});
