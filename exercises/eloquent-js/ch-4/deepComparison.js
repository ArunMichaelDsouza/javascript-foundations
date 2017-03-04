// Deep Comparison

(function() {
	function deepComparison(val1, val2) {
		if(typeof val1 === 'object' && typeof val2 === 'object') {
			return JSON.stringify(val1) === JSON.stringify(val2);
		} else {
			return val1 === val2;
		}
	};

	console.log(deepComparison(1, 1));
	console.log(deepComparison(21, 121));
	console.log(deepComparison({a: 10}, {a: 22}));
	console.log(deepComparison({c: 110}, {c: 110}));
})();