Ext.define("Epta.store.MatchEvents", {
	extend: 'Ext.data.Store',	
	requires: ['Epta.model.MatchEvent'],
//	id:'matches',
	config: {
		model: 'Epta.model.MatchEvent',		
		autoLoad: true,
		
		proxy: {
            type: 'ajax',
            url: 'data/MatchEventData.json',
            reader: {
                type: 'json',
                rootProperty: 'matchEvents'
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

