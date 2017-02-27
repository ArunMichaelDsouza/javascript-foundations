// Reversing an array

(function() {
	function reverseArray(arr) {
		var reversedArray = [];
		for(var i = arr.length - 1; i >= 0; i --) {
			reversedArray.push(arr[i]);
		}

		return reversedArray;
	};

	function reverseArrayInPlace(arr) {
		for(var i = 0; i < arr.length / 2; i ++) {
			var j = i + 1,
				temp = arr[i];
				
			arr[i] = arr[arr.length - j];
			arr[arr.length - j] = temp;
		}

		return arr;
	};

	var array = [1, 2, 3, 4, 5, 6, 7];

	console.log('Reversed array with push: [' + reverseArray(array) + ']');
	console.log('Reversed array in place: [' + reverseArrayInPlace(array) + ']');
})();

