Ext.define('Epta.view.match.OnlineUsersList', {
	extend: 'Ext.List',
	xtype: 'onlineuserslist',
	requires: [
		'Epta.store.OnlineUsers'
	],
	
	config: {
		title: 'OnlineUsers',
	    styleHtmlContent: true,
	    scrollable: true,
		store: 'OnlineUsers',
	    onItemDisclosure: false,
	    emptyText: 'No data found!',
			    	    
	    itemTpl: 
    	['<div class="OnlineUsers">',
    	 '<table id="myTable">',
	      '<tr>',
	      	'<td class="first-child">{user}</td>',
	        '<td>{online}</td>',	           
	      '</tr>',
	    '</table>']      
	}
});
