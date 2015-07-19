define(['jquery','backbone','app/views/hello'],
function($, Backbone,HelloView){
	var AppRouter = Backbone.Router.extend({
		routes:{
			'!/hello':'sayHello'
		},
		sayHello: function(param){
			var helloView = new HelloView({name:"agua"});
		}
	});
	return AppRouter;
});