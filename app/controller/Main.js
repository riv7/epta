Ext.define('Epta.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['Epta.view.edit.EditPlayerView',   
               'Epta.view.edit.EditTeamView',
               'Epta.view.edit.EditMatchView',
               'Epta.view.match.MatchCarousel',
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
			matchCarousel: 'matchcarousel',		
			matchAwayPlayerView: 'matchawayplayerlist',
			matchhomePlayerView: 'matchhomeplayerlist',
			addMatchPlayerView: 'addmatchplayerview',
			
			btnNewPlayer: 'playersview titlebar button[action=settings]',
			btnNewTeam: 'teamsview titlebar button[action=settings]',
			btnNewMatch: 'matchesview titlebar button[action=settings]',
			btnMatchCarouselBack: 'matchcarousel titlebar button[action=back]',
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
			'btnMatchCarouselBack': {
				tap: 'onBtnMatchCarouselBackTap'
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
	onBtnMatchCarouselBackTap: function() {
		Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
	    //this.getMainView().setActiveItem({xtype:'editmatchview'});	    
	},
	onBtnConfirmAddMatchPlayerTap: function() {
		//this.getMainView().setActiveItem(0);
		Ext.Viewport.setActiveItem({xtype:'matchcarousel'});
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
		var matchcarouselview= Ext.create('Epta.view.match.MatchCarousel');
		matchcarouselview.down('titlebar').setTitle(nameT1+' vs. '+nameT2);		
		matchcarouselview.down('#actionTeam1').setText(nameT1)
		matchcarouselview.down('#actionTeam2').setText(nameT2)
		//matchmainview.down('button[teamActionButton=actionTeam1]').setText(record.get('team1'))
		Ext.Viewport.setActiveItem(matchcarouselview);		  	
    },    
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
