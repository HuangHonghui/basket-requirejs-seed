requirejs.config({
	version: {},
    baseUrl: 'dist/js',
    paths: {
        jquery: 'lib/zepto/zepto.min',
        underscore:'lib/underscore/underscore.min',
        backbone:'lib/backbone/backbone-min',
        text:'lib/requirejs/text',
        hammer:'lib/hammer/hammer.min'
    },
    shim: {
        jquery: {
            exports: "Zepto"
        },
        underscore: {
			exports: '_'
		},
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    },
    // basket.js 加载require模块需要配置
    basket:{
        unique:{
            "jquery":1,
            'underscore':1,
            'backbone':1
            //todo: 把所有用到的模块写在这里配置版本，以确定是否需要重新缓存。
        }
    }
});
