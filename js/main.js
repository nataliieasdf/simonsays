// $('.blue')
// 	.addClass('light')
// 	.css('background-color', 'orange')
// 	.text('This is a test!');




// OVER/OUT
// When I hover over a panel, light it up
$('.panel')
	.on('mouseover', function() { // OVER
		
		console.log("OVER");
		
		// Add the light class
		$(this).addClass('light');
	})
	.on('mouseout', function() { // OUT
		
		console.log("OUT");
		
		// Remove the light class
		$(this).removeClass('light');
	
	});







