Ext.define('Epta.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Epta.view.base.MatchesView' ,      
        'Epta.view.base.TeamsView',     
        'Epta.view.base.PlayersView'        
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
