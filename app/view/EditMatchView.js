Ext.define('Epta.view.EditMatchView', {
    extend: 'Ext.form.Panel',
    xtype: 'editmatchview',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Text',
		'Ext.Button'
	],
    
    config: {
		iconCls : 'home',
		title : 'EditMatchesView',
		hidden: true,
        items:[{
		    xtype: 'fieldset',
		    title: 'EditMatchView',
		    instructions: 'enter match information',
        
	        items: [
                {
	                name: 'teamhome',
	                xtype: 'selectfield',
		            options: [
	                {
	                    text: 'svs1',                  
	                    value: 'svs1'
	                },
	                {
	                     text: 'svs2',
	                     value: 'svs2'
	                },
	                {
	                     text: 'fcb',
	                     value: 'fcb'
	                }],
                label: 'team home'
	            },
	            {
	                name: 'teamguest',
	                xtype: 'selectfield',
		            options: [
	                {
	                    text: 'svs1',                  
	                    value: 'svs1'
	                },
	                {
	                     text: 'svs2',
	                     value: 'svs2'
	                },
	                {
	                     text: 'fcb',
	                     value: 'fcb'
	                }],
                label: 'guest'
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