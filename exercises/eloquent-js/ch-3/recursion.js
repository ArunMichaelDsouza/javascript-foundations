// Recursion

(function() {
	var number = 5543, result;

	function isEven(num) {
		num -= 2;

		if(num === 1 || num === 0) {
			result = num;
		} else {
			isEven(num);
		}

		return result === 1 ? number + ' is odd' : number + ' is even';
	};

	console.log(isEven(number));
})();