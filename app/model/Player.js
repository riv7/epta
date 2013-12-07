Ext.define('Epta.model.Player', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    
    config: {
		idProperty: 'id',
		identifier: 'uuid',
        fields: [
            { name: 'id', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'position', type: 'string' },
            { team: 'team', type: 'string' }
        ]
    }
});
