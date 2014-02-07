Ext.define("Epta.store.MatchHomePlayers", {
	extend: 'Ext.data.Store',	
	requires: ['Epta.model.MatchPlayer'],
//	id:'matches',
	config: {
		model: 'Epta.model.MatchPlayer',		
		autoLoad: true,
		
		proxy: {
            type: 'ajax',
            url: 'data/MatchHomePlayerData.json',
            reader: {
                type: 'json',
                rootProperty: 'matchplayers'
            }
        }
		/*,
		data: [
	       {id: '1',date: '1',team1: 'svs', team2: 'fcb'},
	       {id: '2',date: '2',team1: 'svs', team2: 'vfb'},
	       {id: '3',date: '3',team1: 'svs', team2: 'bvb'}
        ] */
	}
})

