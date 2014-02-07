Ext.define('Epta.view.match.MatchRosterTabView', {
	extend: 'Ext.tab.Panel',
	xtype: 'matchrostertabview',
	requires: [
           'Epta.view.match.MatchHomePlayerList',
           'Epta.view.match.MatchAwayPlayerList'
	],
	
	config: {
		title: 'MatchRosterTabView',
		ui: 'light',
		tabBar: {
			layout: {
				pack: 'center'
			}		
		},
		activeTab: 1,
		defaults: {
			scrollable: true
		},
			    	    
	    items: [
		    {
		    	xtype: 'matchhomeplayerlist'		    	
		    },
	    	{
	    		xtype: 'matchawayplayerlist'		  
	    	}
	    ]   
	}
});
