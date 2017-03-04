// A list

(function() {
	function arrayToList(arr) {
		var list = null;
		for(var i = arr.length -1; i >= 0; i --) {
			list = {
				value: arr[i],
				rest: list
			}
		}

		return list;
	};

	function listToArray(list) {
		var arr = [];
		for(var i = list; i; i = i.rest) {
			arr.push(i.value);
		}

		return arr;
	};

	function prepend(value, list) {
		var obj = {
			value: value,
			rest: list
		};

		return obj;
	};

	function nth(list, index) {
		var list = listToArray(list);
		return list[index] ? list[index] : undefined;
	};

	var array = [12, 15, 22],
		list = {
			value: 12,
			rest: {
				value: 15, 
				rest: {
					value: 22, 
					rest: null
				}
			}
		};

	console.log(arrayToList(array));
	console.log(listToArray(list));
	console.log(prepend(8, list));
	console.log(nth(list, 2));
})();