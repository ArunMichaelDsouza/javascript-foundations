// Chess Board (improvised)

(function() {
	var boardSize = 8,
	 	board = '';
	 	
	for(var i = 1; i <= boardSize; i ++) {
		var boardRow = '';

		for(var j = 1; j <= boardSize; j ++) {
			if(i % 2 !== 0) {
				j % 2 !== 0 ? boardRow += ' ' : boardRow += '#';
			} else {
				j % 2 !== 0 ? boardRow += '#' : boardRow += ' ';
			}
		}
		board += boardRow + '\n';
	}

	console.log(board);
})();