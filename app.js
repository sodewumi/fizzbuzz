$(document).ready(function() {

	var number = +$('input').val();

	function check(i) {
		if (isNaN(i)) {
			console.log('this is not a number')
			return false;
		} else {
			console.log('this is a number');
			return true;
		}
	}

	function fizzBuzz() {
		for(var i=1; i <= number; i++) {
			console.log('i')
		}

	}

	fizzBuzz()
	
})
