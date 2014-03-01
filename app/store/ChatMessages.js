Ext.define("Epta.store.ChatMessages", {
	extend: 'Ext.data.Store',	
	requires: ['Epta.model.ChatMessage'],
	config: {
		model: 'Epta.model.ChatMessage',	
		grouper: function(record) {
		 	return record.get('time')[0]
		},
		autoLoad: true,
		
		proxy: {
            type: 'ajax',
            url: 'data/ChatMessageData.json',
            reader: {
                type: 'json',
                rootProperty: 'chatMessages'
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

