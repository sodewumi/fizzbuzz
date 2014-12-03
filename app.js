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
		//var change = document.getElementById('text').innerHTML

		if (check()) {
			//removes show div, and reveals hide div
			$('#show').fadeOut(1000);
			$('#hide').show();

			//create a new paragraph underneath the hide div w/ id of "addText"
			var div = document.getElementById('hide');
			var	p = document.createElement('p');
			p.setAttribute('id', 'addText')
			div.appendChild(p);


			//create variables and array for the for loop
			var arr = [];
			var fzbz = "fizz buzz";
			var fz = "fizz";
			var bz = "buzz";


			// for loop pushes, fizz, buzz, fizzbuzz, or i into the array
			for(var i=1; i <= number_fb; i++) {
				if (i % 3 === 0 && i % 5 === 0) {
					p.appendChild('yo');
					arr.push(fzbz);
				} else if(i % 3 === 0) {
					arr.push(fz);
				} else if (i % 5 === 0) {
					arr.push(bz);
				} else {
					arr.push(i);
				}
			}

			// p.appendChild('yo');
		} else {
			console.log('please enter a real number');
		}
	}


	$('button').on('click', fizzBuzz);
	
})
