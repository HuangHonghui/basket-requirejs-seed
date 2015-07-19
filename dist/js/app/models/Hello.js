define(['backbone'],function(Backbone){
	var Hello = Backbone.Model.extend({
		initialize: function() { 
			this.set({'name':"agua"});
		}
	});
	return Hello;
});