Ext.define('Epta.view.match.OnlineUsersList', {
	extend: 'Ext.List',
	xtype: 'onlineuserslist',
	requires: [
		'Epta.store.OnlineUsers'
	],
	
	config: {
		title: 'OnlineUsers',
	    scrollable: true,
		store: 'OnlineUsers',
	    onItemDisclosure: false,
	    emptyText: 'No data found!',
		grouped: false,
		indexBar: false,		
	
	    itemTpl: '<div class=\"OnlineUsers\"><strong> '+
	    			'{user} || '+
	    			'{online}'+
    				'</strong>'+
	    		  '</div>'	   
	}
});
