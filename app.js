$(document).ready(function() {

	//check function checks if the value entered into the input field is a number

	function check() {
		var number_check = document.getElementById('field_num').value;
		if (isNaN(number_check)) {
			console.log('this is not a number')
			return false;
		} else {
			console.log('this is a number');
			return true;
		}
	}

	//fizzBuzz function grabs the number as well, and implements fizzbuzz

	function fizzBuzz() {
		var number_fb = document.getElementById('field_num').value; 

		if (check()) {
			for(var i=1; i <= number_fb; i++) {
				if (i % 3 === 0 && i % 5 === 0) {
					console.log('fizz buzz');
				} else if(i % 3 === 0) {
					console.log('fizz');
				} else if (i % 5 === 0) {
					console.log('buzz');
				} else {
					console.log(i);
				}
			}
		} else {
			console.log('please enter a real number');
		}
	}


	$('button').on('click', fizzBuzz)
	
})
