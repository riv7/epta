Ext.define('Epta.view.match.MatchMainView', {
	extend: 'Ext.form.Panel',
    xtype: 'matchmainview',
    requires: ['Ext.field.Toggle',
               'Ext.carousel.Carousel',
               'Epta.view.match.MatchCenterView',
               'Epta.view.match.MatchProgressView'
    ],

    config: {
    	title: 'MatchMainView',
	    styleHtmlContent: true,
	    cls: 'cards',
	    layout: {
    		type : 'vbox',
    		align: 'stretch'
    	},
    	defaults: {
    		flex: 1
		},    
	    	    
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
        }, {
        	xtype: 'carousel',
        	activeItem: 1,
        	items : [
        	    {
        	    	xtype: 'matchprogressview',
        	    	cls: 'card'
    			},
    			{
    				xtype: 'matchcenterview'        	    	
    			},
    			{
        	    	html: '<p>right</p>',
        	    	cls: 'card'
    			}
        	
	         ]
    	}]
	}
	
});
