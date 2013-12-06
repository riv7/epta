Ext.define('Epta.model.Match', {
    extend: 'Ext.data.Model',
    requires: 'Ext.data.identifier.Uuid',
    
    config: {
	idProperty: 'id',
	identifier: 'uuid',
        fields: [
            { name: 'id'/*, type: 'auto' */},
            { name: 'date'/*, type: 'auto' */},
            { name: 'team1'/*, type: 'auto' */},
            { name: 'team2'/*, type: 'auto'*/ }

        ]/*,
        proxy: {
           type: 'localstorage',
           id: 'matchstore'
        }*/
    }
});
