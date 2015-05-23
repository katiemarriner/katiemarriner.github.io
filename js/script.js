App = {

	init: function() {
		// Tabletop.init( { key: '1Kr7o8zC2eQ4yk6cfDKu9U02Dmg29INIsHf-GN7z3bgk',
	 //                   callback: function(data, tabletop) { App.showInfo(data) },
	 //                   simpleSheet: true })
		$.getJSON("js/data.json", function(data){
			App.showInfo(data)
		})
	},

	showInfo: function(data) {
	    App.runHandlebars(data);
	},

	runHandlebars: function(data) {
		var source = $("#template").html();
		var template = Handlebars.compile(source)
		var html = template(data)
		$("#portfolio").append(html)
	}

}

$(document).ready(function(){
	App.init();
})
