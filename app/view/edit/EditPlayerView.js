Ext.define('Epta.view.edit.EditPlayerView', {
    extend: 'Ext.form.Panel',
    xtype: 'editplayerview',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Select',
		'Ext.field.Text',
		'Ext.Button'
	],
    
    config: {
		iconCls : 'home',
		title : 'PlayersView',
		hidden: true,
        items:[{
		    xtype: 'fieldset',
		    title: 'EditPlayerView',
		    instructions: 'enter player information',
        
	        items: [
	            {
	                name: 'name',
	                xtype: 'textfield',
	                label: 'Name'
	            },
	            {
	                name: 'position',
	                xtype: 'textfield',
	                label: 'Position'
	            },
	            {
	                name: 'number',
	                xtype: 'textfield',
	                label: 'Number'
	            },
	            {
	                name: 'team',
	                xtype: 'selectfield',
		            options: [
	                {
	                    text: 'team1',                  
	                    value: 'svs1'
	                },
	                {
	                     text: 'team2',
	                     value: 'svs2'
	                },
	                {
	                     text: 'team3',
	                     value: 'fcb'
	                }],
	                label: 'Team'
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