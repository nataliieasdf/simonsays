var pattern = ['R', 'Y', 'B', 'R', 'G', 'Y', 'B'];
// Array of values - basic pattern

var num = 0;

$('.panel').on('click', function(){ //event listener for which panel is clicked

	// Does the panel you clicked match the
	// current item in the sequence

	var colour = $(this).attr('data-colour');



	if (colour == pattern[num] ){
		console.log("Correct! :)")
		// Short form of : num = num + 1;
		num++;

		if (num > pattern.length-1){
			console.log("You win!!!")
		}

	}
	// Runs through the if statement, if true and successful, num will increase by 1
	else {
		console.log("Wrong! :(")
	}




});




