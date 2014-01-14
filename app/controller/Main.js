Ext.define('Epta.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['Epta.view.EditPlayerView',   
               'Epta.view.EditTeamView',
               'Epta.view.EditMatchView',
               'Epta.view.MatchMainView'
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
			matchMainView: 'matchmainview',		
			
			btnNewPlayer: 'playersview titlebar button[action=settings]',
			btnNewTeam: 'teamsview titlebar button[action=settings]',
			btnNewMatch: 'matchesview titlebar button[action=settings]',
			btnMatchMainBack: 'matchmainview titlebar button[action=back]'		
			
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
			},
			'btnMatchMainBack': {
				tap: 'onBtnMatchMainBackTap'
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
	onBtnMatchMainBackTap: function() {
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	    //this.getMainView().setActiveItem({xtype:'editmatchview'});	    
	},
	onDiscloseEvent: function(list, record, target, index, event, eOpts) {		
		var matchmainview= Ext.create('Epta.view.MatchMainView');
		matchmainview.down('titlebar').setTitle(record.get('team1')+' vs. '+record.get('team2'));
		Ext.Viewport.setActiveItem(matchmainview);		  	
    },    
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
