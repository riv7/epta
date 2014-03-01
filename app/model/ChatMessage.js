Ext.define('Epta.model.ChatMessage', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    
    config: {
		idProperty: 'id',
		identifier: 'uuid',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'time', type: 'int' },
            { name: 'icon', type: 'string' },
            { name: 'user', type: 'string'},
            { name: 'message', type: 'string' },
            { name: 'matchid', type: 'int' },

        ],
        sorters: 'time',    
	    associations: [{
	        type:'belongsTo', 
	        model:'Epta.model.Match',
	        foreignKey: 'matchid'
	    }]
    }
});
