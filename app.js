$(document).ready(function() {

	var number = +$('input').val();

	function check(b) {
		if (isNaN(b)) {
			console.log('this is not a number')
			return false;
		} else {
			console.log('this is a number');
			return true;
		}
	}

	function fizzBuzz(s) {
		if (check(s)) {
			for(var i=1; i <= number; i++) {
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
			console.log('please enter a real number')
		}
	}

	fizzBuzz(number);
	
})
