Ext.define('Epta.model.Match', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    
    config: {
		idProperty: 'id',
		identifier: 'uuid',
        fields: [
            { name: 'id', type: 'string' },
            { name: 'date', type: 'string' },
            { name: 'team1', type: 'string' },
            { name: 'team2', type: 'string' }

        ],
        hasMany: [{ model: 'Epta.model.MatchEvent' }]        
    	
	/*,
        proxy: {
           type: 'localstorage',
           id: 'matchstore'
        }*/
    }
});
