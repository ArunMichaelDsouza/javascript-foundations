// Bean Counting

(function() {
	var text = 'This is some random text.',
		letter = 't';

	function countBs(str, char) {
		var count = 0;

		for(var i=0; i<str.length; i++) {
			if(str.charAt(i) === char) {
				count ++;
			}
		}

		return count + ' ' + char + '\'s in the text';
	};

	console.log(countBs(text, letter));
})();