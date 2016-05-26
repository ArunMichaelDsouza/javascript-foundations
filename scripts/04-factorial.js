(function() {
	var num = 12, factorial = 1;

	function loopEnd() {
		console.log('Factorial of '+num+' is : '+factorial);
	}

	for(var i=1; i<=num || loopEnd(); i++) {
		factorial *= i;
	}
})();