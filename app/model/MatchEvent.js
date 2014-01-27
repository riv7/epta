Ext.define('Epta.model.MatchEvent', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    
    config: {
		idProperty: 'id',
		identifier: 'uuid',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'minute', type: 'int'},
            { name: 'team', type: 'string' },
            { name: 'player', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'matchid', type: 'int' },

        ],
        sorters: 'minute',    
	    associations: [{
	        type:'belongsTo', 
	        model:'Epta.model.Match',
	        foreignKey: 'matchid'
	    }]        
    	
	
	/*,
        proxy: {
           type: 'localstorage',
           id: 'matchstore'
           
           
           {id: '1',team: 'svs', player: 'Matthias Lange', type: 'goal', message: 'Tor', matchId: 1}
           
        }*/
    }
});
