Ext.define('Epta.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Epta.view.MatchesView'       
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
            	xtype: 'matchesview'                
            },
            {
                title: 'Teams',
                iconCls: 'action',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Teams',
					items: [
						{
						   iconCls: 'settings',
						   action: 'settings',
						   ui: 'plain',
						   align: 'right',
						   text: 'new team'
						 }
					]
                },

                html: [
                    "Liste aller Mannschaften"
                ].join("")
            },
            {
                title: 'Players',
                iconCls: 'action',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Spieler',
					items: [
						{
						   iconCls: 'settings',
						   action: 'settings',
						   ui: 'plain',
						   align: 'right',
						   text: 'new player'
						 }
					]
                },

                html: [
                    "Liste aller Spieler"
                ].join("")
            }
        ]
    }
});
