$(function(){
	function handlebars(data){
		var source = $('#template').html();
		var template = Handlebars.compile(source);
		var html = template($.parseJSON(data));
		$('table#post tbody').append(html);
	}
	$.get('data/posts.json', function(data){
		var posts = JSON.stringify(data);
	 	var obj = JSON.parse(posts);
	 	handlebars(obj);
	});

	Handlebars.registerHelper("time", function(created_at){
		var time = "";
		time = moment(created_at).fromNow();
		
		return time;
	});
	Handlebars.registerHelper("authorName", function(author_id){
		var id = author_id;
		var name = "Jason Bourne";
		$.get('data/authors.json', function(data){
		var posts = JSON.stringify(data);
	 	var obj = JSON.parse(posts);
	 	
		 	$.each($.parseJSON(obj), function(index, object){
		 		if(id == object.id){
		 			console.log(object);
		 			name = object.name;
		 		}
		 		
		 	});

	 	
		});
		return name;
	});
	Handlebars.registerHelper("authorimg", function(author_id){
		var id = author_id;
		var img = "https://api.adorable.io/avatars/250/jason-bourne";
		// $.get('data/authors.json', function(data){
		// var posts = JSON.stringify(data);
	 // 	var obj = JSON.parse(posts); 	
		// });
		return img;
	});
	Handlebars.registerHelper("author_role", function(author_id){
		var id = author_id;
		var role = "Registered user";
		// $.get('data/authors.json', function(data){
		// var posts = JSON.stringify(data);
	 // 	var obj = JSON.parse(posts); 	
		// });
		return role;
	});
	Handlebars.registerHelper("author_location", function(author_id){
		var id = author_id;
		var location = "New York";
		// $.get('data/authors.json', function(data){
		// var posts = JSON.stringify(data);
	 // 	var obj = JSON.parse(posts); 	
		// });
		return location;
	});
	

	

});



