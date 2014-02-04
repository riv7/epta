Ext.define("Epta.store.MatchRosters", {
	extend: 'Ext.data.Store',	
	requires: ['Epta.model.MatchRoster'],
//	id:'matches',
	config: {
		model: 'Epta.model.MatchRoster',	
		autoLoad: true,
		
		proxy: {
            type: 'ajax',
            url: 'data/MatchRostersData.json',
            reader: {
                type: 'json',
                rootProperty: 'matchrosters'
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

