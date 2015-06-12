app.filter("reverseCountry", function(){
	return function(input){
		// reverse the input string
		return input.split('').reverse().join('');
		};
	});
