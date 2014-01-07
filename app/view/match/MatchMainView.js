Ext.define('Epta.view.MatchMainView', {
	extend: 'Ext.form.Panel',
    xtype: 'matchmainview',

    config: {
    	title: 'MatchMainView',
	    styleHtmlContent: true,
	    
	    items: [{
        	docked: 'top',
	        xtype: 'titlebar',
	        title: 'SVS - FCB',
			items: [
		        {
		           ui: 'back',
		           text: 'Back',
//	               cls: 'card',
//	               html: "new match",
	               align: 'left'
	              
			     }
	        ]
        }],
        html: 'GGAME'
	}

});
