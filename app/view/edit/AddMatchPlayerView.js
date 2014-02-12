Ext.define('Epta.view.edit.AddMatchPlayerView', {
    extend: 'Ext.form.Panel',
    xtype: 'addmatchplayerview',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Select',
		'Ext.field.Text',
		'Ext.Button'
	],
    
    config: {
		title : 'AddMatchPlayerView',		
        items:[{
		    xtype: 'fieldset',
		    title: 'AddMatchPlayerView',
		    instructions: 'add match player',
        
	        items: [
                 {
	                name: 'selectplayer',
	                xtype: 'selectfield',
		            options: [
	                {
	                    text: 'Matthias Lange',                  
	                    value: 'Matthias Lange'
	                },
	                {
	                     text: 'Michael Stöferle',
	                     value: 'Michael Stöferle'
	                },
	                {
	                     text: 'Claudio Pizarro',
	                     value: 'Claudio Pizarro'
	                }],
	                label: 'Select Player'
	            },
	            {
	                name: 'or',
	                xtype: 'label',
	                label: 'or'
	            },
	            {
	                name: 'name',
	                xtype: 'textfield',
	                label: 'Name'
	            },
	            {
	                name: 'number',
	                xtype: 'textfield',
	                label: 'Number'
	            },
	            {
	                name: 'posistion',
	                xtype: 'textfield',
	                label: 'Position'
	            },	           
	            {
	                xtype: 'button',
	                text: 'Submit',
	                action: 'confirm',
	                ui: 'confirm'
	            }
            ]    
        }]
    }
});