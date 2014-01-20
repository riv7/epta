Ext.define('Epta.view.MatchCenterView', {
    extend: 'Ext.form.Panel',
    xtype: 'matchcenterview',
	requires: [
           'Ext.Label'
	],
    	    
    config: {
		title : 'MatchCenterView',		
        items:[{
        	xtype: 'toolbar',
        	docked: 'top',
        	
        	items: [
	        	{
	        		xtype: 'button',
	        		text: 'Team1',
	        		itemId: 'actionTeam1',
	        		//teamActionButton: 'actionTeam1',
	        		ui: 'action'
	    		},{
	    			xtype: 'spacer'
				},{
					xtype: 'label',					
					html: '5'
				},{
					xtype: 'label',
					html: ':'
				},{
					xtype: 'label',
					html: '3'
				},{
					xtype: 'spacer'
				},{
					xtype: 'button',
					text: 'Team2',
					itemId: 'actionTeam2',
					ui: 'action'
				}        	
	        ]
		   
        	}, {
        		html: 'MYCENTER'
        	}, {
        		xtype: 'toolbar',
        		docked: 'bottom',        	
	        	items: [
        	        {
        	        	xtype: 'textfield',
	        	        placeHolder: 'type chat here',
	        	        flex: 7
    	        	},{
    	        		xtype: 'button',
	    	        	iconCls: 'reply',
	    	        	iconMask: true,
	    	        	text: 'Send',
	    	        	ui: 'confirm',
	    	        	flex: 1   	        		
	        		}        	        
    	        ]
        	}        	
        ]
    }
});