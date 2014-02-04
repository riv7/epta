Ext.define('Epta.model.MatchRoster', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    
    config: {
		idProperty: 'id',
		identifier: 'uuid',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'team', type: 'string' },
            { name: 'matchid', type: 'int' },

        ],
        associations: [
           {
		        type:'belongsTo', 
		        model:'Epta.model.Match',
		        foreignKey: 'matchid'
           },
           {
	           	type: 'hasMany',
	           	model: 'Epta.model.MatchPlayer',
	           	getterName: 'getMatchPlayers',
	           	associationKey : 'MatchPlayers'
	   		},
       ]        
    	
	
	/*,
        proxy: {
           type: 'localstorage',
           id: 'matchstore'
           
           
           {id: '1',team: 'svs', player: 'Matthias Lange', type: 'goal', message: 'Tor', matchId: 1}
           
        }*/
    }
});
