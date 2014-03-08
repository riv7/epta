Ext.define('Epta.model.OnlineUser', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    
    config: {
		idProperty: 'id',
		identifier: 'uuid',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'user', type: 'string'},
            { name: 'online', type: 'boolean' },
            { name: 'matchid', type: 'int' }

        ],
        sorters: 'user',    
	    associations: [{
	        type:'belongsTo', 
	        model:'Epta.model.Match',
	        foreignKey: 'matchid'
	    }]            
    }
});
