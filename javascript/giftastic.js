var buttonsArray = ["cats", "dogs", "mice", "geeks"];


// $(document).on("ready", function() {
// 	(buttonsArray).prepend("<img>")
// })

// for(var i = 0; i < buttonsArray.length; i++) {

// }

$(document).ready(function() {

// QueryURl variable used in AJAX call

var queryUrl = "https://api.giphy.com/v1/gifs/random?api_key=0oaEJ1zOCiHjDpaLEjTehIOANWf484SM&tag=dogs"
// AJAX call
$.ajax({
	url: queryUrl,
	method: "GET"
})
	.done(function(response) {

		var imageUrl = response.data.image_original_url;

		var catImage = $("<img>");

		catImage.attr("src", imageUrl);
		catImage.attr("alt", "cat image");

		$("#images").prepend(catImage);
	});
});	

$("#cat-button").on("click", function() {

// QueryURl variable used in AJAX call

var queryUrl = "https://api.giphy.com/v1/gifs/random?api_key=0oaEJ1zOCiHjDpaLEjTehIOANWf484SM&tag=dogs"
// AJAX call
$.ajax({
	url: queryUrl,
	method: "GET"
})
	.done(function(response) {

		var imageUrl = response.data.image_original_url;

		var catImage = $("<img>");

		catImage.attr("src", imageUrl);
		catImage.attr("alt", "cat image");

		$("#images").prepend(catImage);
	});
});	

// function loopThrough() 
// {
// 	for(var i = 0; i < buttonsArray.length; i++)
// }