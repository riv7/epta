Ext.define('Epta.view.TeamsView', {
    extend: 'Ext.List',
    xtype: 'teamsview',
	requires: [
		'Epta.store.Teams'
	],

    config: {
    	title: 'TeamsView',
	    iconCls: 'action',	
	    styleHtmlContent: true,
	    scrollable: true,
		store: 'Teams',
        onItemDisclosure: false,
        emptyText: 'No data found!',
	    grouped: true,
		indexBar: true,	        

        items: [{
        	docked: 'top',
	        xtype: 'titlebar',
	        title: 'Teams',
			items: [
		        {
		           iconCls: 'settings',
	               action: 'settings',
	               ui: 'plain',
	               cls: 'card',
	               html: "new team",
	               align: 'right',
	               text: 'new team2'
			     }
	        ]
        }],
        itemTpl: '<div class="Team"><strong>{name}</strong></div>'
	}

});
