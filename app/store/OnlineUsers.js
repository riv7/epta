Ext.define("Epta.store.OnlineUsers", {
	extend: 'Ext.data.Store',	
	requires: ['Epta.model.OnlineUser'],
//	id:'matches',
	config: {
		model: 'Epta.model.OnlineUser',	
		grouper: function(record) {
		 	return record.get('user')[0]
		},
		autoLoad: true,
		
		proxy: {
            type: 'ajax',
            url: 'data/OnlineUserData.json',
            reader: {
                type: 'json',
                rootProperty: 'onlineUsers'
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

