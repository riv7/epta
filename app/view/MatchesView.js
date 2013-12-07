Ext.define('Epta.view.MatchesView', {
    extend: 'Ext.List',
    xtype: 'matchesview',
	requires: [
		'Epta.store.Matches'
	],

    config: {
    	title: 'Games',
	    iconCls: 'home',	
	    styleHtmlContent: true,
	    scrollable: true,
		store: 'Matches',
        onItemDisclosure: true,
        emptyText: 'No data found!',
	    grouped: false,
		indexBar: false,	        

        items: [{
        	docked: 'top',
	        xtype: 'titlebar',
	        title: 'Spiele',
			items: [
		        {
		           iconCls: 'settings',
	               action: 'settings',
	               ui: 'plain',
	               cls: 'card',
	               html: "jdsjgkljkldg",
	               align: 'right',
	               text: 'new game'
			     }
	        ]
        }],
        itemTpl: '<div class="Match"><strong>{team1} : {team2}</strong></div>'
	}

});
