/**
 * Created by huanghonghui on 15/7/16.
 */
// 本项目配置
require.config({
    // Requirejs的版本控制
    version: {
        'path/to/module': '20150716',
        defaultVersion: '20150716'
    },
    shim:{

    },
    basket:{
    	
        unique:{
        	'app/views/hello':2,
			'app/routers/router':1
        }
    }
});
require(['jquery', 
'underscore', 
'backbone',
'app/views/hello',
'app/routers/router'],
function($, _, Backbone,HelloPage,Workspace) {
    console.log("start");
    new Workspace();
    Backbone.history.start();
    
    //new HelloPage();
});