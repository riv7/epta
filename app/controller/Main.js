Ext.define('Epta.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['Epta.view.EditPlayerView',   
               'Epta.view.EditTeamView',
               'Epta.view.EditMatchView'
               ],
    
    config: {
		refs: {
			mainView: 'main',
			matchesView: 'matchesview',
			teamsView: 'teamsview',
			playersView: 'playersview',
			editPlayersView: 'editplayerview',
			editTeamsView: 'editteamview',
			editMatchesView: 'editmatchview',
			
			btnNewPlayer: 'playersview titlebar button[action=settings]',
			btnNewTeam: 'teamsview titlebar button[action=settings]',
			btnNewMatch: 'matchesview titlebar button[action=settings]'
				
			
			
			
        },
        control: {
        	'btnNewPlayer': {
				tap: 'onBtnNewPlayerTap'
			},
			'btnNewTeam': {
				tap: 'onBtnNewTeamTap'
			},
			'btnNewMatch': {
				tap: 'onBtnNewMatchTap'
			},
			'matchesview': {
				disclose: 'onDiscloseEvent'
			}
            
        }
    },
    
    onBtnNewPlayerTap: function() {    	
	    this.getMainView().setActiveItem({xtype:'editplayerview'});	    
	},
	onBtnNewTeamTap: function() {
	    this.getMainView().setActiveItem({xtype:'editteamview'});	    
	},
	onBtnNewMatchTap: function() {
	    this.getMainView().setActiveItem({xtype:'editmatchview'});	    
	},
	onDiscloseEvent: function(list, record, target, index, event, eOpts) {
    	Ext.Viewport.setActiveItem({xtype:'editplayerview'});
		//Ext.Msg.alert("Open Match", "Open Match " + record.get('team1')+ " vs. "+ record.get('team2'))         	
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
