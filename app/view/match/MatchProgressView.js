Ext.define('Epta.view.match.MatchProgressView', {
	extend: 'Ext.Panel',
	xtype: 'matchprogressview',
	requires: [
           'Ext.Label',
           'Epta.view.match.MatchProgressList',
           'Epta.view.match.MatchRosterTabView'
	],
	
	config: {
		title: 'MatchProgressView',
		layout:'vbox',
//		defaults: {
//	        flex : 1
//	     },		
	    	    
	    items: [
		    {
		    	xtype: 'label',
		    	html: 'Spielverlauf',
		    	flex : 1
		    },
	    	{
		    	xtype: 'matchprogresslist',
		    	flex : 3
	    	},
	    	{
		    	xtype: 'label',
		    	html: 'Aufstellung',	
	    		flex : 1
		    },
	    	{
		    	xtype: 'matchrostertabview',
		    	flex : 3
			}
	    ]   
	}
});
