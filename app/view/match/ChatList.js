Ext.define('Epta.view.match.ChatList', {
	extend: 'Ext.List',
	xtype: 'chatlist',
	requires: [
		'Epta.store.ChatMessages'
	],
	
	config: {
		title: 'ChatList',
	    scrollable: true,
		store: 'ChatMessages',
	    onItemDisclosure: false,
	    emptyText: 'No data found!',
	    itemTpl: '<div class="Chat"><strong>{time} | {icon} | {user} | {message}</strong></div>'
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
