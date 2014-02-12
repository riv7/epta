Ext.define('Epta.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['Epta.view.edit.EditPlayerView',   
               'Epta.view.edit.EditTeamView',
               'Epta.view.edit.EditMatchView',
               'Epta.view.match.MatchMainView',
               'Epta.view.edit.AddMatchPlayerView'
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
			matchAwayPlayerView: 'matchawayplayerlist',
			matchhomePlayerView: 'matchhomeplayerlist',
			addMatchPlayerView: 'addmatchplayerview',
			
			btnNewPlayer: 'playersview titlebar button[action=settings]',
			btnNewTeam: 'teamsview titlebar button[action=settings]',
			btnNewMatch: 'matchesview titlebar button[action=settings]',
			btnMatchMainBack: 'matchmainview titlebar button[action=back]',
			btnAddMatchAwayPlayer: 'matchawayplayerlist button[action=settings]',
			btnAddMatchHomePlayer: 'matchhomeplayerlist button[action=settings]',
			btnConfirmAddMatchPlayer: 'addmatchplayerview button[action=confirm]'
			
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
			},
			'btnAddMatchAwayPlayer': {
				tap: 'onBtnAddMatchAwayPlayerTap'
			},
			'btnAddMatchHomePlayer': {
				tap: 'onBtnAddMatchHomePlayerTap'
			},
			'btnConfirmAddMatchPlayer': {
				tap: 'onBtnConfirmAddMatchPlayerTap'
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
	onBtnConfirmAddMatchPlayerTap: function() {
		//this.getMainView().setActiveItem(0);
		Ext.Viewport.setActiveItem({xtype:'matchmainview'});
	},
	onBtnAddMatchAwayPlayerTap: function() {
		Ext.Viewport.setActiveItem({xtype:'addmatchplayerview'});
	},
	onBtnAddMatchHomePlayerTap: function() {
		Ext.Viewport.setActiveItem({xtype:'addmatchplayerview'});
	},
	onDiscloseEvent: function(list, record, target, index, event, eOpts) {	
		var nameT1 = record.get('team1')
		var nameT2 = record.get('team2')
		var matchmainview= Ext.create('Epta.view.match.MatchMainView');
		matchmainview.down('titlebar').setTitle(nameT1+' vs. '+nameT2);		
		matchmainview.down('#actionTeam1').setText(nameT1)
		matchmainview.down('#actionTeam2').setText(nameT2)
		//matchmainview.down('button[teamActionButton=actionTeam1]').setText(record.get('team1'))
		Ext.Viewport.setActiveItem(matchmainview);		  	
    },    
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
