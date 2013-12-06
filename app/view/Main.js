Ext.define('Epta.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Games',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Spiele',
					items: [
				        {
				           iconCls: 'settings',
			               action: 'settings',
			               ui: 'plain',
			               cls: 'card',
			               html: "jdsjgkljkldg",
			               align: 'right',
			               text: 'new game'
					     }
			        ]
                },          	                
	                //width: Ext.os.deviceType == 'Phone' ? null : 300,
	                //height:Ext.os.deviceType == 'Phone' ? null : 500,
            		xtype: 'list',
            		store: 'MatchesStore',
            		itemTpl: '<div class="Epta.model.Match"><strong>{team1}</strong>{team2}</div>',
            		grouped: true,
            		indexBar: true/*,
               

                html: [
                    "Liste aller Spiele"
                ].join("")*/
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
