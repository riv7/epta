Ext.define('Epta.view.match.MatchCarousel', {
    extend: 'Ext.Carousel',
    xtype: 'matchcarousel',
	requires: ['Ext.field.Toggle',
       'Ext.carousel.Carousel',
		'Epta.view.match.MatchCenterView',
		'Epta.view.match.MatchProgressView',
		'Epta.view.match.OnlineUsersList'
	],
    config: {
    	//fullscreen: true,
//	    defaults: {
//	        //styleHtmlContent: true,
//	        flex: 1
//	    }, // defaults
    	title: 'MatchCarousel',
    	//styleHtmlContent: true,
//    	cls: 'cards',
//    	activeItem: 2,
    	//direction: 'vertical',
//    fullscreen: true,
//    width: '100',
//    height: '100',
//        direction: 'horizontal',
//		layout: {
//			type : 'vbox',
//			align: 'stretch'
//		},
//		defaults: {
//			flex: 1
//		},    
			    
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
			       label: 'running',
			       align: 'right'
		    	 }			     
		    ]
		},	    
	    {
	    	xtype: 'matchprogressview',
	    	cls: 'card dark'
		},
		{
			xtype: 'matchcenterview',
			cls: 'card dark'
		},
		{
			xtype: 'onlineuserslist', 
	    	cls: 'card dark'
		}
	
	 ]
        
    }
});