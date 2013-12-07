Ext.define('Epta.model.Team', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    
    config: {
		idProperty: 'id',
		identifier: 'uuid',
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'name', type: 'auto' }
        ]
    }
});
