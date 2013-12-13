Ext.define('Epta.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Epta.view.MatchesView' ,      
        'Epta.view.TeamsView',     
        'Epta.view.PlayersView'        
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
            	xtype: 'matchesview'                
            },
            {
            	xtype: 'teamsview' 
            },
            {
            	xtype: 'playersview'
            }
        ]
    }
});
