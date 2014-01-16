Ext.define('Epta.view.MatchMainView', {
	extend: 'Ext.form.Panel',
    xtype: 'matchmainview',
    requires: ['Ext.field.Toggle',
               'Ext.carousel.Carousel'
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
        	    	html: '<p>left</p>',
        	    	cls: 'card'
    			},
    			{
        	    	html: '<p>middle</p>',
        	    	cls: 'card'
    			},
    			{
        	    	html: '<p>right</p>',
        	    	cls: 'card'
    			}
        	
	         ]
    	}]
	}
	
});
