// Minimum

(function() {
	function min(num1, num2) {
		return num1 < num2 ? num1 : num2;
	};

	var minNumber = min(4, -1);
	console.log('Minimum is : ' + minNumber);
})();