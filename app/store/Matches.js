Ext.define("Epta.store.Matches", {
	id: 'MatchesStore',
	extend: 'Ext.data.Store',	
	requires: 'Epta.model.Match',
	config: {
		model: 'Epta.model.Match',		
		autoLoad: true,
		data: [
	       {id: '1',date: '1',team1: 'svs', team2: 'fcb'},
	       {id: '2',date: '2',team1: 'svs', team2: 'vfb'},
	       {id: '3',date: '3',team1: 'svs', team2: 'bvb'}
        ] 
	}
})

