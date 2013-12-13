Ext.define('Epta.view.MatchesView', {
    extend: 'Ext.List',
    xtype: 'matchesview',
	requires: [
		'Epta.store.Matches'
	],

    config: {
    	title: 'GamesView',
	    iconCls: 'home',	
	    styleHtmlContent: true,
	    scrollable: true,
		store: 'Matches',
        onItemDisclosure: function(record) {
    		Ext.Msg.alert("Open Match", "Open Match " + record.get('team1')+ " vs. "+ record.get('team2'))         	
        },
        emptyText: 'No data found!',
	    grouped: false,
		indexBar: false,	        

        items: [{
        	docked: 'top',
	        xtype: 'titlebar',
	        title: 'Spiele',
			items: [
		        {
		           xtype: 'button',
		           iconCls: 'settings',
	               action: 'settings',
	               ui: 'plain',
	               cls: 'card',
	               html: "new match",
	               align: 'right',
	               text: 'new game'
			     }
	        ]
        }],
        itemTpl: '<div class="Match"><strong>{team1} : {team2}</strong></div>'
	}

});
