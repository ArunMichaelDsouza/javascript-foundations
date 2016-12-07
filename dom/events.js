(function() {

	// Adding event listeners on all elements of a NodeList
	var listItems = document.querySelectorAll('.list-item');

	function clickCallback() {
		alert(this.innerText);
	};

	for(var i=0; i<listItems.length; i++) {
		listItems[i].addEventListener('click', clickCallback)
	}
})();