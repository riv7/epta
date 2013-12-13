Ext.define('Epta.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: 'Epta.view.EditPlayerView',    
    
    config: {
		refs: {
			mainView: 'main',
			matchesView: 'matchesview',
			teamsView: 'teamsview',
			playersView: 'playersview',
			editPlayersView: 'editplayerview',
			
			btnNewPlayer: 'playersview titlebar button[action=settings]'
        },
        control: {
        	'btnNewPlayer': {
				tap: 'onBtnNewPlayerTap'
			}
            
        }
    },
    
    onBtnNewPlayerTap: function() {
	    this.getMainView().setActiveItem({xtype:'editplayerview'});	    
	},
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
