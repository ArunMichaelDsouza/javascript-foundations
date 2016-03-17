/* Algorithm to search item in list

Pseudo code : 

Linear Search 
1 begin

2 set initial values in list 
  list = [787,123,4444, 1277, 33, 45]

3 set item to search
  itemToSearch = 33

4 perform linear search in list
  find(itemToSearch in list) // Compare each item with itemToSearch one by one
  if list[i] == itemToSearch
  	return list[i]

6 if found, return search result

7 end
*/

// Implementation

(function() {
	'use strict';

	var list = [22,67,12,4,99,33,54,678,32,998], itemToSearch = 33;

	var callback = function(foundFlag, position) {
		foundFlag ? console.log('Item found at position : '+position) : console.log('Item not found!');
	};
	
	var linearSearch = function(list, item) {
		var found = false, i = 0;
		for(i; i<list.length || found || callback(found); i++) {
			if(list[i] == item) {
				found = true;
				return callback(found, i);
			}
		}
	};

	console.log(linearSearch(list, itemToSearch));
})();



