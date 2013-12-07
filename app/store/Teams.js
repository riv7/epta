Ext.define("Epta.store.Teams", {
	extend: 'Ext.data.Store',	
	requires: ['Epta.model.Team'],
//	id:'matches',
	config: {
		model: 'Epta.model.Team',		
		grouper: function(record) {
		 	return record.get('name')[0]
		},
		autoLoad: true,
		
		proxy: {
            type: 'ajax',
            url: 'data/TeamData.json',
            reader: {
                type: 'json',
                rootProperty: 'teams'
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

