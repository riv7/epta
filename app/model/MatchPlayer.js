Ext.define('Epta.model.MatchPlayer', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    
    config: {
		idProperty: 'id',
		identifier: 'uuid',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'number', type: 'int'},            
            { name: 'player', type: 'string' },
            { name: 'position', type: 'string' },
            { name: 'matchid', type: 'int' }
        ],
	    associations: [
           {
		        type:'belongsTo', 
		        model:'Epta.model.Match',
		        foreignKey: 'matchid'
//				type:'hasOne', 
//		        model:'Epta.model.Match',
//				getterName     : 'getMatch',
//				associatedName : 'Match',
//				associationKey : 'Match'
           }
	    ]        
    	
	
	/*,
        proxy: {
           type: 'localstorage',
           id: 'matchstore'           
           
           {id: '1',team: 'svs', player: 'Matthias Lange', type: 'goal', message: 'Tor', matchId: 1}
           
        }*/
    }
});
