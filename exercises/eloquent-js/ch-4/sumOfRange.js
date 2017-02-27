// Sum of a range

(function() {
	function range(start, end, step) {
		var arr = [];
		
		if(step > 1) {
			for(var i = start; i <= end; i += step) {
				arr.push(i);
			}
		} else {
			for(var i = start; i >= end; i = i + (step)) {
				arr.push(i);
			}	
		}

		return arr;
	};

	function sum(arr) {
		var sum = 0;
		for(var i = 0; i < arr.length; i ++) {
			sum += arr[i];
		}

		return sum;
	};

	var array = [2, 5, 44, 12, 7];

	console.log('Range from 12 to 16 with step of 2: [' + range(12, 26, 2) + ']');
	console.log('Range from 5 to 2 with step of -1: [' + range(5, 2, -1) + ']');
	console.log('Sum of given array: ' + sum(array));
})();