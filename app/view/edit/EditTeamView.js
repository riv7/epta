Ext.define('Epta.view.edit.EditTeamView', {
    extend: 'Ext.form.Panel',
    xtype: 'editteamview',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.Button'
	],
    
    config: {
		iconCls : 'home',
		title : 'PlayersView',
		hidden: true,
        items:[{
		    xtype: 'fieldset',
		    title: 'EditTeamView',
		    instructions: 'enter team information',
        
	        items: [
	            {
	                name: 'name',
	                xtype: 'textfield',
	                label: 'Name'
	            },
	            {
	                xtype: 'button',
	                text: 'Submit',
	                ui: 'confirm'
	            }
            ]    
        }]
    }
});