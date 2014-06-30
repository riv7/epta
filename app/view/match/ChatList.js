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
			    	    
	    itemTpl: '<strong>{time} | {icon} | {user} | {message}</strong>'
//    	['<div class="ChatMessage">',
//    	 '<table>',
//	      '<tr>',
//	      	'<td>{time}</td>',
//	        '<td>{icon}</td>',
//	        '<td>{user}</td>',
//	        '<td>{message}</td>',	          
//	      '</tr>',
//	    '</table>']      
	}
});
