Ext.define('Epta.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
		stores: 'Matches',
        refs: {
			mainView: 'main',
			matchesView: 'matchesview'
        },
        control: {
            
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
