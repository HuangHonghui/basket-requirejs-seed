define(["underscore","backbone","text!app/tpls/hello.tpl"],function(_, Backbone, helloPage){
	'use strict';
	var HelloView = Backbone.View.extend({
		el:$("#Hello"),
		template: _.template(helloPage),
		events:{
			"change .js-user":"sayHello"
		},
		initialize:function(options){
			this.options = options;
			this.model = this.options;
			console.log(this.model);
			this.render();
		},
		render: function(){
			console.log("render:",this.model);
			this.$el.html(this.template(this.model));
			return this;
		},
		sayHello:function(e){
			console.log(this);
			console.log(e.currentTarget);
			this.model.name = e.currentTarget.value;
			//this.render();
		}
	});
	return HelloView;
});