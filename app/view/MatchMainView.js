Ext.define('Epta.view.MatchMainView', {
	extend: 'Ext.form.Panel',
    xtype: 'matchmainview',
    requires: ['Ext.field.Toggle'],

    config: {
    	title: 'MatchMainView',
	    styleHtmlContent: true,
	    	    
	    items: [{
        	docked: 'top',
	        xtype: 'titlebar',
	        title: 'X vs. Y',
			items: [
		        {
		           action: 'back',
		           ui: 'back',
		           text: 'Back',
	               align: 'left'
	              
			     },{
			       xtype: 'togglefield',
			       name: 'toggle',
			       label: 'läuft',
			       align: 'right'
		    	 }			     
	        ]
        }],           
        
        html: 'GGAME'
	}
	
});
