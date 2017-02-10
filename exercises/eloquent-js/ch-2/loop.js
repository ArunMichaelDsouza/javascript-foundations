// Looping a Triangle

(function() {
	for(var i = 1; i <= 7; i ++) {
		var triangle = '';
		
		for(var j = 1; j <= i; j ++) {
			triangle += '#';
		}
		
		console.log(triangle);
	}
})();