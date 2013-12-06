Ext.define('Epta.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
		stores: 'Epta.store.Matches',
        refs: {
			mainView: 'main'            
        },
        control: {
            
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
