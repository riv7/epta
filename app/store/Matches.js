Ext.define("Epta.store.Matches", {
	extend: 'Ext.data.Store',	
	requires: ['Epta.model.Match'],
//	id:'matches',
	config: {
		model: 'Epta.model.Match',		
		autoLoad: true,
		
		proxy: {
            type: 'ajax',
            url: 'data/MatchData.json',
            reader: {
                type: 'json',
                rootProperty: 'matches'
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

